import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  /* This property returns the inner width of the browser window's 
  content area in pixels. It represents the available width for rendering 
  the webpage content, excluding scrollbars, borders, and other UI elements. */
  const isMobileView = window.innerWidth < 800;

  const chartDataPoints = [
    /* what the labels used to be { label: "Jan", value: 0 }, */
    { label: isMobileView ? "J" : "Jan", value: 0 },
    { label: isMobileView ? "F" : "Feb", value: 0 },
    { label: isMobileView ? "M" : "Mar", value: 0 },
    { label: isMobileView ? "A" : "Apr", value: 0 },
    { label: isMobileView ? "M" : "May", value: 0 },
    { label: isMobileView ? "J" : "Jun", value: 0 },
    { label: isMobileView ? "J" : "Jul", value: 0 },
    { label: isMobileView ? "A" : "Aug", value: 0 },
    { label: isMobileView ? "S" : "Sep", value: 0 },
    { label: isMobileView ? "O" : "Oct", value: 0 },
    { label: isMobileView ? "N" : "Nov", value: 0 },
    { label: isMobileView ? "D" : "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
