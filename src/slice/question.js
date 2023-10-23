

import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
    name: 'question',
    initialState: [],
    reducers: {
        updateAttempts: (state, action) => {
            const { id, attempts } = action.payload;
            const questionIndex = state.findIndex((question) => question.questionID === id);
            if (questionIndex !== -1) {
                state[questionIndex].attempts = attempts;
            }
        },
        updateFlag: (state, action) => {
            const { id, flagged } = action.payload;
            const questionIndex = state.findIndex((question) => question.questionID === id);
            if (questionIndex !== -1) {
                state[questionIndex].flagged = flagged;
            }
        },
        updateAnswer: (state, action) => {
            const { id, answer } = action.payload;
            const questionIndex = state.findIndex((question) => question.questionID === id);
            if (questionIndex !== -1) {
                state[questionIndex].answer = answer;
            }
        },

        populateInitialState: (state, action) => {
            console.log("action payload", action.payload);
            state = action.payload;
            return state;

        },


        updateStatus: (state, action) => {
            const { id, status } = action.payload;
            const questionIndex = state.findIndex((question) => question.questionID === id);
            if (questionIndex !== -1) {
                state[questionIndex].status = status;
            }

        }
    },
});

export const { updateAttempts, updateFlag, updateAnswer, populateInitialState, updateStatus } = questionsSlice.actions;

export default questionsSlice.reducer;
