import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

//to pass ref, enclose in forwardRef
const Input = React.forwardRef(
  ({ isValid, type, id, value, onChange, onBlur, label }, ref) => {
    const inputRef = useRef();
    //declare internal ref function to call from outside
    const activate = () => {
      inputRef.current.focus();
    };
    //pass outside ref and a callback function returning outside function name: internal function name
    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });
    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
