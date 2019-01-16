import React from "react";
import CalculatorButton from "./CalculatorButton";
import Screen from "./Screen";

class App extends React.Component {
  state = { screenValue: "" };

  handleClick = buttonName => {
    this.setState({ screenValue: this.state.screenValue + buttonName });
  };

  render() {
    return (
      <div className="ui container">
        <div className="calc" style={{ height: "95vh" }}>
          <h2>Calculator</h2>
          <Screen value={this.state.screenValue} />
          <div className="ui equal height grid" style={{ height: "60%" }}>
            <div className="ui row">
              <CalculatorButton num="CE" clickHandler={this.handleClick} />
              <CalculatorButton num="C" clickHandler={this.handleClick} />
              <CalculatorButton num="%" clickHandler={this.handleClick} />
              <CalculatorButton num="/" clickHandler={this.handleClick} />
            </div>
            <div className="ui row">
              <CalculatorButton num="7" clickHandler={this.handleClick} />
              <CalculatorButton num="8" clickHandler={this.handleClick} />
              <CalculatorButton num="9" clickHandler={this.handleClick} />
              <CalculatorButton num="*" clickHandler={this.handleClick} />
            </div>
            <div className="ui row">
              <CalculatorButton num="4" clickHandler={this.handleClick} />
              <CalculatorButton num="5" clickHandler={this.handleClick} />
              <CalculatorButton num="6" clickHandler={this.handleClick} />
              <CalculatorButton num="-" clickHandler={this.handleClick} />
            </div>
            <div className="ui row">
              <CalculatorButton num="1" clickHandler={this.handleClick} />
              <CalculatorButton num="2" clickHandler={this.handleClick} />
              <CalculatorButton num="3" clickHandler={this.handleClick} />
              <CalculatorButton num="+" clickHandler={this.handleClick} />
            </div>
            <div className="ui row">
              <CalculatorButton num="." clickHandler={this.handleClick} />
              <CalculatorButton num="0" clickHandler={this.handleClick} />
              <CalculatorButton num="00" clickHandler={this.handleClick} />
              <CalculatorButton num="=" clickHandler={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
