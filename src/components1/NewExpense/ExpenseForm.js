import React, { useState } from "react";

const ExpenseForm = ({ onSaveExpense }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      price: +price,
      date: new Date(date),
    };
    onSaveExpense(expenseData);
    //two way data bidning
    setTitle("");
    setPrice("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" onChange={titleChangeHandler} value={title} />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={price}
          onChange={priceChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2020-12-31"
          value={date}
          onChange={dateChangeHandler}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
