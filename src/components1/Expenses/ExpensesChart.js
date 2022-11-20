import React from "react";

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); //0 means January
    chartDataPoints[expenseMonth].value += expense.price;
  }
  const chartDataPointsValues = chartDataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...chartDataPointsValues);
  let barFillHeight = "0";

  return (
    <>
      {chartDataPoints.map((dataPoint) => (
        <div>
          <div>
            Height:
            {totalMaximum > 0
              ? Math.round((dataPoint.value / totalMaximum) * 100)
              : barFillHeight}
            %
          </div>
          <div>Label: {dataPoint.label}</div>
        </div>
      ))}
    </>
  );
};

export default ExpensesChart;
