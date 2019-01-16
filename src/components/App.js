import React from "react";
import CalculatorButton from "./CalculatorButton";
import Screen from "./Screen";

class App extends React.Component {
  state = {
    screenValue: "",
    stored: "",
    operation: ""
  };

  addTokenToScreen = buttonName => {
    this.setState({ screenValue: this.state.screenValue + buttonName });
  };

  addOperation = buttonName => {
    const currValue = this.state.screenValue;
    this.setState({
      screenValue: "",
      stored: currValue,
      operation: buttonName
    });
  };

  percentify = buttonName => {
    const pctValue = Number(this.state.screenValue) * 0.01;
    this.setState({ screenValue: pctValue });
  };

  calculate = () => {
    const { screenValue, stored, operation } = this.state;
    if (operation && stored) {
      let result = 0;
      switch (operation) {
        case "+":
          result = Number(stored) + Number(screenValue);
          break;
        case "-":
          result = Number(stored) - Number(screenValue);
          break;
        case "/":
          result = Number(stored) / Number(screenValue);
          break;
        case "*":
          result = Number(stored) * Number(screenValue);
          break;
        default:
          return;
      }
      this.setState({
        screenValue: result,
        stored: "",
        operation: ""
      });
    }
  };

  render() {
    return (
      <div className="ui container">
        <div className="calc" style={{ height: "95vh" }}>
          <h2>Calculator</h2>
          <Screen value={this.state.screenValue} />
          <div className="ui equal height grid" style={{ height: "60%" }}>
            <div className="ui row">
              <CalculatorButton
                num="CE"
                clickHandler={() =>
                  this.setState({ screenValue: "", stored: "", operation: "" })
                }
              />
              <CalculatorButton
                num="C"
                clickHandler={() => this.setState({ screenValue: "" })}
              />
              <CalculatorButton num="%" clickHandler={this.percentify} />
              <CalculatorButton num="/" clickHandler={this.addOperation} />
            </div>
            <div className="ui row">
              <CalculatorButton num="7" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="8" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="9" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="*" clickHandler={this.addOperation} />
            </div>
            <div className="ui row">
              <CalculatorButton num="4" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="5" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="6" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="-" clickHandler={this.addOperation} />
            </div>
            <div className="ui row">
              <CalculatorButton num="1" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="2" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="3" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="+" clickHandler={this.addOperation} />
            </div>
            <div className="ui row">
              <CalculatorButton num="." clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="0" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="00" clickHandler={this.addTokenToScreen} />
              <CalculatorButton num="=" clickHandler={this.calculate} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
