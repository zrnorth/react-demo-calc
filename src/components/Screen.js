import React from "react";

const Screen = ({ value }) => {
  return (
    <div
      className="ui fluid input"
      style={{ paddingBottom: "20px", direction: "RTL" }}
    >
      <input
        type="text"
        className="screen"
        placeholder="0"
        style={{
          textAlign: "right"
        }}
        value={value}
        readOnly
      />
    </div>
  );
};

export default Screen;
