import { useState } from "react";
import { Chessboard } from "react-chessboard";
import Chess from "chess.js";

export const ChessGame = ({ currentUser, setCurrentUser, setNewUser }) => {
  const [game, setGame] = useState(new Chess());
  const getCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || []
  const checkExisting = JSON.parse(localStorage.getItem("userList")) || []
  const userid = getCurrentUser[0]?.id

  const makeAMove = (move) => {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result;
  };

  const makeRandomMove = () => {
    const possibleMoves = game.moves();

    if (possibleMoves.length === 0) {
      getCurrentUser[0].win++
      getCurrentUser[0].elo += 14
      localStorage.setItem("currentUser", JSON.stringify(getCurrentUser))
      setCurrentUser(getCurrentUser)
      const objIndex = checkExisting.findIndex((obj => obj.id == userid))
      checkExisting[objIndex].win++
      checkExisting[objIndex].elo += 14
      localStorage.setItem("userList", JSON.stringify(checkExisting))
      setNewUser(checkExisting)
    }

    if (game.in_draw()) {
      return;
    }
    
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  };

  const onDrop = (sourceSquare, targetSquare) => {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  };

  return (
    <div className="chess">
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </div>
  );
};
