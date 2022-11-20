import React from "react";

const ExpensesFilter = ({ selectedYear, onChangeFilter }) => {
  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };
  return (
    <div>
      <label htmlFor="filter">Filter by year</label>
      <select value={selectedYear} onChange={dropdownChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
