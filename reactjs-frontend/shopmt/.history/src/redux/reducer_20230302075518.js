const initialState = {};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todeList/addTodo':
            return {
                ...state,
            };
        default: {
            return state;
        }
    }
};
