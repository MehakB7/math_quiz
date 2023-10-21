

import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
    name: 'question',
    initialState: [],
    reducers: {
        updateAttempts: (state, action) => {
            const { questionID, attempts } = action.payload;
            const questionIndex = state.findIndex((question) => question.questionID === questionID);
            if (questionIndex !== -1) {
                state[questionIndex].attempts = attempts;
            }
        },
        updateFlag: (state, action) => {
            const { questionID, flagged } = action.payload;
            const questionIndex = state.findIndex((question) => question.questionID === questionID);
            if (questionIndex !== -1) {
                state[questionIndex].flagged = flagged;
            }
        },
        updateAnswer: (state, action) => {
            const { id, answer } = action.payload;
            console.log("inside this ", answer);
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
                state[questionIndex].id = status;
            }

        }
    },
});

export const { updateAttempts, updateFlag, updateAnswer, populateInitialState, updateStatus } = questionsSlice.actions;

export default questionsSlice.reducer;
