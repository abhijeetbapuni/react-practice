import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter", //identifier//use any name you want
  initialState,
  reducers: {
    //Reducers must be pure, side effect free, synchronous functions
    increment(state) {
      state.counter++; //we can do this here as redux toolkit internally make it immutable code and not update the state directly, and also we don't need to pass all the keys also
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; //access data using payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions; //as we can access action like this: counterSlice.actions.increment

export default counterSlice.reducer;
