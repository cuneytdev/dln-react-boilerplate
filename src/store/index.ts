import {combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import languageReducer from "./reducers/languageReducer";
import notificationReducer from "./reducers/notificationReducer";

export const store = createStore(
    combineReducers({
        auth: authReducer,
        language: languageReducer,
        notification: notificationReducer
    })
)
