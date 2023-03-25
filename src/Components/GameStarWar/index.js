import React from "react";
import { utils } from "../Utils/utils";
import PlayNumber from "../PlayNumber/PlayNumber";
import StarDisplay from "../StarDisplay/StarDisplay";
import PlayAgain from "../PlayAgain/PlayAgain";
import StartGame from "../StartGame/StartGame";
import useGameState from "../CustomHook/useGameState";
import "./index.css";
function GameStarWar(props) {
  const [stars, availablenumbers, candidateNumbers, secondsLeft, setGameState] =
    useGameState(utils, props.startGame);

  const gameStatus =
    availablenumbers.length === 0
      ? "won"
      : secondsLeft === 0
      ? "lost"
      : "active";

  //check if candidates number are wrong. for number status.
  const candidatesAreWrong = utils.sum(candidateNumbers) > stars;
  //Status of eact number.
  const numberStatus = (number) => {
    // if selected number is not in available number list return "used".
    if (!availablenumbers.includes(number)) return "used";
    // if candidate number includes number sum it , if less then star it can be candidate, if more it is a wrong number.
    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  //play number function
  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== "active" || currentStatus === "used") return;

    const newCandidateNumbers =
      currentStatus === "available"
        ? candidateNumbers.concat(number)
        : candidateNumbers.filter(
            (candidateNumber) => candidateNumber !== number
          );

    setGameState(newCandidateNumbers);
  };

  return (
    <div className="game">
      <div className="container">
        <div className="title">
          <h2> &#9733;&#9733; star war &#9733;&#9733;</h2>
        </div>
        <div className="help">
          <h4>select numbers that sum's to the number of stars.</h4>
        </div>
        <div className="playGround">
          <div className="starDisplay">
            {!props.startGame ? (
              <StartGame onClick={props.onStartgame} />
            ) : gameStatus !== "active" ? (
              <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
            ) : (
              <StarDisplay count={stars} />
            )}
          </div>

          <div className="timer">
            <p>Time remaining {secondsLeft} s</p>
          </div>
          <div className="numberDisplay">
            {utils.range(1, 9).map((number) => (
              <PlayNumber
                status={numberStatus(number)}
                key={number}
                number={number}
                onClick={onNumberClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameStarWar;
