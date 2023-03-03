const initialState = {};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todeList/addTodo':
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
