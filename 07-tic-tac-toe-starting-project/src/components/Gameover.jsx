function Gameover({winner,restart}) {
  return (
    <div id="game-over">
        <h2>Game Over!</h2>{winner?
         <p>{winner} won</p>:
         <p>It&apos;s a tie</p>
        }
       
        <p><button onClick={restart}>Restart!</button></p>
    </div>
  )
}

export default Gameover