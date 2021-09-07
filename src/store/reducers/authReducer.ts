import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "../actions/auth.actions";

const userStr = localStorage.getItem('user')!;
let user = JSON.parse(userStr);
const initialState = user ? {loggedIn: true, user} : {};

export default function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                type: LOGIN_REQUEST,
                payload: {
                    loggingIn: true,
                    user: action.user
                }
            };
        case LOGIN_SUCCESS:
            return {
                type: LOGIN_SUCCESS,
                payload: {
                    loggingIn: true,
                    user: action.user
                }
            };
        case LOGIN_FAILURE:
            return {};
        case LOGOUT:
            return {};
        default:
            return state
    }
}
