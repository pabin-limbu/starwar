import React from "react";
import { utils } from "../Utils/utils";
import "./index.css";
import ufoPng from "../../ufo.png";

function StarDisplay(props) {
  return (
    <div>
      {utils.range(1, props.count).map((starId) => {
        return (
          <div key={starId} className="star">
            <img src={ufoPng} height="50" width="50" alt="ufo" />
          </div>
        );
      })}
    </div>
  );
}

export default StarDisplay;
