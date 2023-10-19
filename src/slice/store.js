import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './question';

const store = configureStore({
    reducer: {
        questions: questionsReducer,

    },
});

export default store;