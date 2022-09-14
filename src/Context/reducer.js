export const initialStates = {
    tipPercent: "",
    amountPerPerson: 0,
    tipPerPerson: 0,
    bill: "",
    numberOfPerson: "",
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "setBill":
            return { ...state, bill: action.payload }
        case "setTipPercent":
            return { ...state, tipPercent: action.payload }
        case "setAmountPerPerson":
            return { ...state, amountPerPerson: action.payload }
        case "setTipPerPerson":
            return { ...state, tipPerPerson: action.payload }
        case "setNumberOfPerson":
            return { ...state, numberOfPerson: action.payload }
        case "resetState":
            return {
                tipPercent: 0,
                amountPerPerson: 0,
                tipPerPerson: 0,
                bill: 0,
                numberOfPerson: 0,
            }
        default:
            return state;
    }
}