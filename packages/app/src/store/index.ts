import { configureStore } from '@reduxjs/toolkit';
import newslettersReducer from './newsletters/newslettersReducer';

const store = configureStore({
    reducer: {
        newsletters: newslettersReducer
    }
})

export type AppDispatch = typeof store.dispatch
export default store;