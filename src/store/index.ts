import {combineReducers, createStore} from "redux";
import authReducer from "./auth/authReducer";
import languageReducer from "./language/languageReducer";

export const store = createStore(
    combineReducers({
        auth: authReducer,
        language: languageReducer
    })
)
