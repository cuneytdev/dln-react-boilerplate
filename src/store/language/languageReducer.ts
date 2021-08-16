import {messages} from "../../constants/languages";
import {SET_LANGUAGE} from "./languageActions";

const initialState = {
    currentLanguage: messages["en-GB"]
}

export default function languageReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_LANGUAGE:
            const newState = state;
            newState.currentLanguage = action.payload;
            return Object.assign({}, newState);
        default:
            return state;
    }
}

export const getCurrentLanguage = (state: any) => state.language.currentLanguage;
