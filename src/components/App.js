import React from "react";
import CalculatorButton from "./CalculatorButton";
import Screen from "./Screen";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="calc" style={{ height: "95vh" }}>
          <h2>Calculator</h2>
          <Screen />
          <div className="ui equal height grid" style={{ height: "60%" }}>
            <div className="ui row">
              <CalculatorButton />
              <CalculatorButton />
              <CalculatorButton />
              <CalculatorButton />
            </div>
            <div className="ui row">
              <CalculatorButton />
              <CalculatorButton />
              <CalculatorButton />
              <CalculatorButton />
            </div>
            <div className="ui row">
              <CalculatorButton />
              <CalculatorButton />
              <CalculatorButton />
              <CalculatorButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
