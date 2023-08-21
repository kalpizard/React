//Si quiero usar react

import React from "react";
import GameCard from "./GameCard";

const games = [
  { name: "Ahorcado", genre: "Variado", platform: "Web" },
  { name: "The Legend of Zelda", genre: "Aventura", platform: "Nintendo" },
];

function GameList() {
  return (
    <div className="game-list">
      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div>
  );
}

export default GameList;
