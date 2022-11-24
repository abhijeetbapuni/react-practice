import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

//state is by default undefined, so provide initial state for state
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // state.counter++; //This works for never do this, always return a separate object and return all the keys as react doesn't merge the state, it overrides the state
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
