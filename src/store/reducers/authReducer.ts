const initialState = {}

export default function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case "ACTION_ONE":
            return state;
        default:
            return state;
    }
}
