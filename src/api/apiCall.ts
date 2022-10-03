import axios, {AxiosRequestConfig} from "axios";
import {API_METHOD_TYPE, FAIL, FORBIDDEN, ITEM_NOT_FOUND, SERVER_ERROR, SUCCESS, UNAUTHORIZED} from "../constants/api";

function axiosConfig(method: API_METHOD_TYPE, endPoint: string, token: string | null, data: any): AxiosRequestConfig {
    const config: AxiosRequestConfig = {
        method: method,
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
        },
        url: `${process.env.REACT_APP_API_ENDPOINT}${endPoint}`,
    };
    if (token) {
        // @ts-ignore
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    if (data) {
        config.data = JSON.stringify(data);
    }
    return config;
}

function responseParser(res: any) {
    if (res && res.data && (res.status === 200 || res.status === 201)) {
        return {data: res.data, status: res.status, message: SUCCESS};
    } else if (res && res.status === 401) {
        return {message: UNAUTHORIZED, status: res.status};
    } else if (res && res.status === 404) {
        return {message: ITEM_NOT_FOUND, status: res.status};
    } else if (res && res.status === 400) {
        return {message: res.message, status: res.status};
    } else if (res && res.status === 500) {
        return {message: SERVER_ERROR, status: res.status};
    }
    //Delete operation returns just 200 or 404
    return {message: res.status === 200 ? SUCCESS : FAIL, status: res.status};
}

function errorParser(err: any, url: any) {
    console.error(`${url} --> `, err);
    if (err && (err.status === 401 || (err.response && err.response.status === 401))) {
        return {
            message: UNAUTHORIZED,
            status: err.status ? err.status : err.response.status,
            errorCode: err.response ? err.response.data.ErrorCode : -1,
        };
    } else if (err && (err.status === 404 || (err.response && err.response.status === 404))) {
        return {
            message: ITEM_NOT_FOUND,
            status: err.status ? err.status : err.response.status,
            errorCode: err.response ? err.response.data.ErrorCode : -1,
        };
    } else if (err && (err.status === 400 || (err.response && err.response.status === 400))) {
        return {
            message: FAIL,
            status: err.status ? err.status : err.response.status,
            errorCode: err.response ? err.response.data.ErrorCode : -1,
        };
    } else if (err && (err.status === 403 || (err.response && err.response.status === 403))) {
        return {
            message: FORBIDDEN,
            status: err.status ? err.status : err.response.status,
            errorCode: err.response ? err.response.data.ErrorCode : -1,
        };
    }
    return {
        message: SERVER_ERROR,
        status: err.status,
        errorCode: err.response ? err.response.data.ErrorCode : -1,
    };
}


export const apiCall = (method: API_METHOD_TYPE, url: string, token: string | null, params: any) => {
    const config = axiosConfig(method, url, token, params);
    return axios(config)
        .then((res) => responseParser(res))
        .catch((err) => errorParser(err, url));
};
