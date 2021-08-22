export const SET_LANGUAGE = 'SET_LANGUAGE';

export default function switchLanguage(language: string) {
    return {
        type: SET_LANGUAGE,
        payload: language
    }
}
