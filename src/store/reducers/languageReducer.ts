import {SET_LANGUAGE} from "../actions/languageActions";

const initialState = {
    currentLanguage: navigator.language && navigator.language.includes("en") ? "en" : "tr"
}

//reducers
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

//selectors
export const getCurrentLanguage = (state: any) => state.language.currentLanguage;
