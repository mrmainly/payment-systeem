export const stateReducer = (state, action) => {
    switch (action.type) {
        case 'authModal':
            return { ...state, authModal: action.payload }
        case 'notification':
            return { ...state, noti: action.payload }
        case 'login':
            return { ...state, login: action.payload }
        default:
            throw new Error();
    }
}