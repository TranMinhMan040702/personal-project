const initialState = {
    cart: [],
};

const rootReducer = (state = initialState, action) => {
    console.log([...state, action.payload]);
    switch (action.type) {
        case 'addToCart':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default: {
            return state;
        }
    }
};

export default rootReducer;
