import {combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import languageReducer from "./reducers/languageReducer";

export const store = createStore(
    combineReducers({
        auth: authReducer,
        language: languageReducer
    })
)
