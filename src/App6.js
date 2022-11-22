import React, { useCallback, useMemo, useState } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false); //states are intialized only once and on next render cycle it is not intialize, react recognizes that this components has already state so updates it. This happends until the component is removed from the DOM. Once removed from dom and reintialize later then only a new state is created.
  const [listTitle, setListTitle] = useState("My List");

  console.log("APP RUNNING");

  //useCallback caches the function and uses the same function if the dependencies not changed, otherwise reinitialize the function with new reference, and Button component will rerender even if React.memo used in button component.
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph); //react schedules state updates, states not updates immeidiately, react per component evaluates how many state updates are do done, then updates that component. it is so fast that we can't see. But to be safer we should use previous state to update the state.
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []); //as array is non primitive, so it changes at every render, so memoize this to send the same reference array to props so that component wont rerender+useMemo insize compoenent won't re evaluate.

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
