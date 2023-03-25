import React from "react";
import "./index.css";
function StartGame(props) {
  return (
    <div className="start-game-container">
      <p>Stop the invaders</p>
      <button className="btn-startgame" onClick={props.onClick}>Start Game</button>
    </div>
  );
}

export default StartGame;
