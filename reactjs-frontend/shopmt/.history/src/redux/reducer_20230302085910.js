const initialState = {
    cart: [],
};

const rootReducer = (state = initialState, action) => {
    console.log([...state, action.payload]);
    switch (action.type) {
        case 'addToCart':
            return {};
        default:
            return state;
    }
};

export default rootReducer;
