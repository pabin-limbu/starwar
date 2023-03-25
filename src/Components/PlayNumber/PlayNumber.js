import React from "react";
import "./index.css";
function PlayNumber(props) {
  const colors = {
    used: "#88B04B",
    wrong: " #DD4124",
    selected: "#009B77",
    candidate: "#45B8AC",
  };

  return (
    <div className="number-container">
      <button
        status={props.status}
        style={{ backgroundColor: colors[props.status] }}
        className="number"
        onClick={() => {
          props.onClick(props.number, props.status);
        }}
      >
        {props.number}
      </button>
    </div>
  );
}

export default PlayNumber;
