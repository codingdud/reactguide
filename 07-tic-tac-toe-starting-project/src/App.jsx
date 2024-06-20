import Player from "./components/player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./win-combination"
import Gameover from "./components/Gameover"
const PLAYERS={
  X:"akanoob",
  O:"darkhornat"
}
const ib = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]


function deriveGameBoard(gameTurns){
  let gameBoard = [...ib.map(arr=>[...arr])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }
  return gameBoard;
}


function whoWon(gameBoard,player){
  let win;
  for (const combination of WINNING_COMBINATIONS) {
    const fss = gameBoard[combination[0].row][combination[0].col];
    const sss = gameBoard[combination[1].row][combination[1].col];
    const ttt = gameBoard[combination[2].row][combination[2].col];
    if (fss !== null && fss === sss && sss === ttt) {
      win = player[fss]
      console.log(win)
      break;
      
    }
  }
  return win
}

function DeriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O"
  }
  return currentPlayer;
}

//App funtion Is Here

function App() {
  const [player,setPlayer]=useState(PLAYERS)

  const [gameTurns, setGameTurns] = useState([])
  

  const active = DeriveActivePlayer(gameTurns);
  let gameBoard =deriveGameBoard(gameTurns);
  const win=whoWon(gameBoard,player);
  const hasDraw = gameTurns.length === 9 && !win

  function handleActive(rowindex, colindex) {
    setGameTurns(prev => {
      let currentPlayer = "X";
      if (prev.length > 0 && prev[0].player === "X") {
        currentPlayer = "O"
      }
      const updateTurn = [{
        square: { row: rowindex, col: colindex },
        player: currentPlayer,
      }, ...prev]
      return updateTurn;
    })
  }
  function handleRestart(){
    setGameTurns([]);
  }
  function handleplayerName(symbol,name){
    setPlayer(prev=>{
      return {...prev,[symbol]:name}
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intialName={PLAYERS.X}
            symbole="X"
            isActive={active === "X"}
            onChangename={handleplayerName}
          />
          <Player
            intialName={PLAYERS.O}
            symbole="O"
            isActive={active === "O"}
            onChangename={handleplayerName}
          />
        </ol>
        {(win || hasDraw) && <Gameover winner={win} restart={handleRestart} />}
        <GameBoard onSelectSuare={handleActive} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
