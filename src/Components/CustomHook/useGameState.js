import { useEffect, useState } from "react";

const useGameState = (utils, startGame) => {
  const [stars, setStart] = useState(utils.random(1, 9));
  const [availablenumbers, setAvailableNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [secondsLeft, setSecondLeft] = useState(20);

  useEffect(() => {
    if (startGame && secondsLeft > 0 && availablenumbers.length > 0) {
      const timerId = setTimeout(() => {
        setSecondLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });


  const setGameState = (newCandidateNumbers) => {
    // If sum of candidate numbers are not equal to starNumber add the candidate number to candidateNumbers array.
    if (utils.sum(newCandidateNumbers) !== stars) {
      setCandidateNumbers(newCandidateNumbers);
    } else {
      // If sum of candidate number is equal to star - remove the star number from available number and reset the candidateNumber array.
      const newAvailableNumbers = availablenumbers.filter(
        (number) => !newCandidateNumbers.includes(number)
      );

      setStart(utils.randomSumIn(newAvailableNumbers, 9));
      setAvailableNumbers(newAvailableNumbers);
      setCandidateNumbers([]); // reset candidate number when sum of canddates array match.
    }
  };

  return [stars, availablenumbers, candidateNumbers, secondsLeft, setGameState];
};

export default useGameState;
