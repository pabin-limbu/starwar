import React from "react";
import "./index.css";

function PlayAgain(props) {
  return (
    <div className="game-done">
      <p  className="message"> {props.gameStatus === "lost" ? "GAME OVER" : "YOU WIN THE GAME"}</p>
      <button className="btnPlayAgain" onClick={props.onClick}>
        Play again
      </button>
    </div>
  );
}

export default PlayAgain;
