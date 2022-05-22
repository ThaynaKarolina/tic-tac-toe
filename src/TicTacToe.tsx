import React, { useEffect, useState } from 'react';
import Square from './components/Square'
import * as S from './style'
import EndGame from './EndGame/EndGame'

const initial = ""
const x_player = "X"
const o_player = "O"
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const TicTacToe = () => {

  const [grid, setGrid] = useState(Array(9).fill(initial))
  const [player, setPlayer] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)
  const [draw, setDraw] = useState(false)
  const [winCount, setWinCount] = useState({X:0, O:0, draw:0})

  useEffect(() => {
      isGameOver()    
  }, [player, draw])

  function isGameOver() {
    // if X win 
    for (let i = 0; i < 8; i++) {
      if (
        grid[winCombination[i][0]] === x_player &&
        grid[winCombination[i][1]] === x_player &&
        grid[winCombination[i][2]] === x_player
      ) {
        setGameFinished(true);
        console.log(winCount)
        setWinCount({...winCount, X: winCount.X +1})
        return
      }
    }

    // if O win 
    for (let i = 0; i < 8; i++) {
      if (
        grid[winCombination[i][0]] === o_player &&
        grid[winCombination[i][1]] === o_player &&
        grid[winCombination[i][2]] === o_player
      ) {
        console.log('o')
        setGameFinished(true);
        setWinCount({...winCount, O: winCount.O +1})
        return
      }
    }

    // draw game
    if (!gameFinished) {
      if (!grid.includes(initial)) {
        console.log('draw')
        setDraw(true)
        setWinCount({...winCount, draw: winCount.draw + 1})
        setGameFinished(true)
      }
    }
  }

  function clearHistory() {
    setWinCount({ X: 0, O: 0, draw: 0 });
    restartGame();
  }
  
  function restartGame() {
    setGrid(Array(9).fill(initial))
    setGameFinished(false)
    setDraw(false)
    setPlayer(false)
  }

  function handleClick(id: number) {
      setGrid(
        grid.map((item: any, index: number) => {
          if (index === id) {
            if (player) {
              return x_player 
            } else {
              return o_player
            }
          } else {
            return item
          }
        })
      )
    setPlayer(!player)
  }
  
  return (
    <S.Container>
    {gameFinished && <EndGame restartGame={restartGame} clearHistory={clearHistory} player={player} draw={draw}/>}
      <Square winCount={winCount} clickedArray={grid}  handleClick={handleClick} player={player} restartGame={restartGame}/>
    </S.Container>
  );
}

export default TicTacToe;
