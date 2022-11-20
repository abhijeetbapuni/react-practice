import React, { useState } from "react";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });
    //safer approach
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };
  const priceChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   price: e.target.value,
    // });
    //safer approach
    setUserInput((prevState) => {
      return {
        ...prevState,
        price: e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
    //safer approach
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value,
      };
    });
  };
  return (
    <>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={priceChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2020-12-31"
          onChange={dateChangeHandler}
        />
      </div>
      {JSON.stringify(userInput)}
    </>
  );
};

export default ExpenseForm;
