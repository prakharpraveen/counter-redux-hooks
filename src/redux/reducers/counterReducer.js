function counterReducer(state = { counter: 10 }, action) {
    switch (action.type) {
        case "DECREASE_COUNTER":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "INCREASE_COUNTER":
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state;
    }

}

export default counterReducer;