import {NotificationProps} from "rsuite/es/Notification";
import {Notification} from 'rsuite';
import {
    SET_ERROR_NOTIFICATION, SET_NOTIFICATION,
    SET_SUCCESS_NOTIFICATION,
    SET_WARNING_NOTIFICATION
} from "../actions/notificationActions";

const initialState: NotificationProps = {
    title: "Notifications",
    duration: 20000,
}

export default function notificationReducer(state: NotificationProps = initialState, action: { type: string, payload: NotificationProps }) {
    switch (action.type) {
        case SET_NOTIFICATION: {
            const newState = {state, ...action.payload};
            Notification.open({state, ...action.payload});
            return newState;
        }
        case SET_ERROR_NOTIFICATION: {
            const newState = {state, ...action.payload};
            Notification.error({state, ...action.payload});
            return newState;
        }
        case SET_SUCCESS_NOTIFICATION: {
            const newState = {state, ...action.payload};
            Notification.success(newState);
            return newState;
        }
        case SET_WARNING_NOTIFICATION: {
            const newState = {state, ...action.payload};
            Notification.warning(newState);
            return newState;
        }
        default:
            return state;
    }
}
