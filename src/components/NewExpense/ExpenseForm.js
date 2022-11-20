import React, { useState } from "react";

const ExpenseForm = () => {
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
  const color1 = Math.floor(Math.random() * 256);
  const color2 = Math.floor(Math.random() * 256);
  const color3 = Math.floor(Math.random() * 256);
  return (
    <div style={{ backgroundColor: `rgb(${color1}, ${color2}, ${color3})` }}>
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
    </div>
  );
};

export default ExpenseForm;
