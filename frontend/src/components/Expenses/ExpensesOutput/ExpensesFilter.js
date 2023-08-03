import React from "react";

import "./ExpensesFilter.scss";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="heading-4">Filter by year</label>
        {/* Listen for changes on select */}
        <select
          value={props.selected}
          onChange={dropdownChangeHandler}
          className="paragraph-text"
        >
          <option value="2023" className="paragraph-text">
            2023
          </option>
          <option value="2022" className="paragraph-text">
            2022
          </option>
          <option value="2021" className="paragraph-text">
            2021
          </option>
          <option value="2020" className="paragraph-text">
            2020
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
