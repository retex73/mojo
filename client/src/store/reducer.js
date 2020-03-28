const initalState = {
    buildings: 101
}

const reducer = (state = initalState, action) => {
    if (action.type === 'SOMETHING') {
        return {
            ...state,
            buildings: state.buildings + 1
        }
    }
    return state;
}

export default reducer;