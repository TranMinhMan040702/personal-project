const initialState = {};

const rootReducer = (state = initialState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'addToCart':
            return {
                ...state,
                ...action.payload,
            };
        default: {
            return state;
        }
    }
};

export default rootReducer;
