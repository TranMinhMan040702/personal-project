const initialState = {
    cart: [],
};

const rootReducer = (state = initialState, action) => {
    console.log({
        ...state,
        cart: [...state.cart, action.payload],
    });
    switch (action.type) {
        case 'addToCart':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default: {
            console.log('No add');
            return state;
        }
    }
};

export default rootReducer;
