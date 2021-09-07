import {User, UserLoginRequest} from "../../types/user.interface";

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
