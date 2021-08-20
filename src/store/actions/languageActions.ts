import {CustomMenuItem} from "../../components/menu";

export const SET_LANGUAGE = 'SET_LANGUAGE';

export default function switchLanguage(language: CustomMenuItem) {
    return {
        type: SET_LANGUAGE,
        payload: language
    }
}
