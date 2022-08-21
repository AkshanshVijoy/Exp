import React from "react";
import './ExpensesFilter.css';
const ExpensesFilter = (props) => {
  // when a new value is selected from the dropdown menu the dropdownChangeHandler is called and the onChangeFilter function from props is used to pass the selected value as parameter to the parent component
    const dropdownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
      </div>
    </div>
  );
};
export default ExpensesFilter;
