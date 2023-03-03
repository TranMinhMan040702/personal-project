const initialState = [];

const rootReducer = (state = initialState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'addToCart':
          const stateNew = [...state]
            return {
              stateNew.push(action.payload)
            };
        default: {
            return state;
        }
    }
};

export default rootReducer;
