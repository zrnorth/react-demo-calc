import React from "react";

const CalculatorButton = ({ num, clickHandler }) => {
  return (
    <div className="four wide stretched column">
      <button className="ui button" onClick={() => clickHandler(num)}>
        {num}
      </button>
    </div>
  );
};

export default CalculatorButton;
