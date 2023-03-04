// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});
export default store;
