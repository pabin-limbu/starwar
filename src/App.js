import { useState } from "react";
import "./App.css";
import GameStarWar from "./Components/GameStarWar";

function App() {
  const [gameId, setGameid] = useState(1);
  const [startGame, setStartGame] = useState(false);
  return (
    <div className="App">
      <GameStarWar
        key={gameId}
        startNewGame={() => setGameid(gameId + 1)}
        startGame={startGame}
        onStartgame={() => setStartGame(true)}
      />
    </div>
  );
}

export default App;
