export const SET_LANGUAGE = 'SET_LANGUAGE';

export const switchLanguage = (language: any) => {
    return {
        type: SET_LANGUAGE,
        payload: language
    }
}
