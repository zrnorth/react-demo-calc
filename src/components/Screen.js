import React from "react";

class Screen extends React.Component {
  render() {
    return (
      <div
        className="ui fluid input screen"
        style={{ paddingBottom: "20px", direction: "RTL" }}
      >
        <input
          type="text"
          placeholder="screen"
          style={{
            textAlign: "right"
          }}
        />
      </div>
    );
  }
}

export default Screen;
