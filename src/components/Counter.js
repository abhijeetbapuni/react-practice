import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  //use selector binds the state to this component so that we will always the the updated state when state changes, also it manages subsciptions and unsubscriptions when component unmount
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter); //slice of showCounter and show is a state variable

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter()); //remember to execute the action inside dispatch
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); //it gets converted to: { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }// so from reducer you can access it using action.payload
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };
  // const increaseHandler = () => {
  //   dispatch({ type: "increase", amount: 10 }); //from reducer you can access it using action.amount
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     //propName:state
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     //propName: function calling dispatch action
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
