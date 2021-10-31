export const stateReducer = (state, action) => {
    switch (action.type) {
        case 'authModal':
            return { ...state, authModal: action.payload }
        default:
            throw new Error();
    }
}