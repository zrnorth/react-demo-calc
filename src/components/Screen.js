import React from "react";

const Screen = ({ value }) => {
  return (
    <div
      className="ui fluid input screen"
      style={{ paddingBottom: "20px", direction: "RTL" }}
    >
      <input
        type="text"
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
