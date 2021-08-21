const initialState = {
    counter: 0
}
export const handleCounter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            console.log("truee.......");
            const sum = state.counter = state.counter + action.payload
            return state
        default:

            console.log("false...");
            return state
    }
}