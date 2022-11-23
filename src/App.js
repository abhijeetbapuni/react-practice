import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./store";

function App() {
  return (
    // also we can import provider in index.js root level
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
