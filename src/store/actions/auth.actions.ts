import {User, UserLoginRequest} from "../../types/user.interface";
import {apiCall} from "../../api/apiCall";
import {API_METHOD_TYPE} from "../../constants/api";
import {LOGIN} from "../../constants/apiUrls";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export function loginRequest(user: UserLoginRequest) {
    return {
        type: LOGIN_REQUEST,
        payload: user
    }
}

export function loginSuccess(user: User) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export function loginFailure(error: any) {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export function logout(user: User) {
    return {
        type: LOGOUT,
        payload: user
    }
}

export function authenticate(credentials: UserLoginRequest) {
    return (dispatch: any) => {
        dispatch(loginRequest(credentials))
        apiCall(API_METHOD_TYPE.POST, LOGIN, null, credentials).then(resp => {
            // If login was successful, set the token in local storage
            //localStorage.setItem('id_token', resp)
            //localStorage.setItem('id_token', resp)
            // Dispatch the success action
            //dispatch(loginSuccess(resp))
        }).catch(err => {
            //dispatch(loginFailure(resp))
        })
    }
}
