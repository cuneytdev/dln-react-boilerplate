import {NotificationProps} from "rsuite/es/Notification";

export const SET_ERROR_NOTIFICATION = "SET_ERROR_NOTIFICATION";
export const SET_WARNING_NOTIFICATION = "SET_WARNING_NOTIFICATION";
export const SET_SUCCESS_NOTIFICATION = "SET_SUCCESS_NOTIFICATION";
export const SET_NOTIFICATION = "SET_NOTIFICATION";

export function setNotification(props: NotificationProps) {
    return {
        type: SET_NOTIFICATION,
        payload: props
    }
}

export function setErrorNotification(props: NotificationProps) {
    return {
        type: SET_ERROR_NOTIFICATION,
        payload: props
    }
}

export function setWarningNotification(props: NotificationProps) {
    return {
        type: SET_WARNING_NOTIFICATION,
        payload: props
    }
}

export function setSuccessNotification(props: NotificationProps) {
    return {
        type: SET_SUCCESS_NOTIFICATION,
        payload: props
    }
}

