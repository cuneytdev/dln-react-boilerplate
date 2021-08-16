import {combineReducers, createStore} from "redux";
import authReducer from "./auth/authReducer";

export const store = createStore(
    combineReducers({
        auth: authReducer
    })
)
