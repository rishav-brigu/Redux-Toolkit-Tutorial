import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: { // reducer
        increment: (state) => { // action
            state.count += 1
        },
        decrement: (state) => {// action
            state.count -= 1
        },
        reset: (state) => {// action
            state.count = 0
        },
        incrementByValue: (state, action) => {// action with a payload
            state.count += action.payload;
        },
    }
});

export const { increment, decrement, reset, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
