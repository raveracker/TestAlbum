export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    }
};
