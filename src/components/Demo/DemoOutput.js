import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
//Dont use react.memo every where
//It might have some performance issues depending upload no of props to compare between previous and current props
//Use only if it is necessary
