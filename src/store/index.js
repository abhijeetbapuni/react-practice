import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter", //identifier//use any name you want
  initialState,
  reducers: {
    increment(state) {
      state.counter++; //we can do this here as redux toolkit internally make it immutable code and not update the state directly, and also we don't need to pass all the keys also
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  //key name must be reducer
  //if you have multiple reducers then pass in reducer like this {counter:counterSlice.reducer,...}
  reducer: counterSlice.reducer,
});

export default store;

// const initialState = { counter: 0, showCounter: true };

// //state is by default undefined, so provide initial state for state
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     // state.counter++; //This works for never do this, always return a separate object and return all the keys as react doesn't merge the state, it overrides the state
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
