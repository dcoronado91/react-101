import React, { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App() {
// Se setea el tablero con 9 posiciones vacías (null)
  const [board, setBoard] = useState(Array(9).fill(null))

// Se setea el turno inicial en "X"
  const [turn, setTurn] = useState(TURNS.X)

const [winner, setWinner] = useState(null) // Estado para almacenar el ganador, inicialmente es null, si hay ganador se actualiza con "X" o "O"

const resetGame = () => {
  setBoard(Array(9).fill(null)) // Reinicia el tablero a su estado inicial (9 posiciones vacías)
  setTurn(TURNS.X) // Reinicia el turno a "X"
  setWinner(null) // Reinicia el ganador a null
}

// Función para actualizar el tablero cuando se hace click en una casilla (se llama en el componente Square)
  const updateBoard = (index) => {
    if(board[index] || winner) return // Si la casilla ya tiene un valor, no se actualiza el tablero
    const newBoard = [...board] // Nuevo tablero
    newBoard[index] = turn // "X" o "O"
    setBoard(newBoard)
    const newWinner = checkWinnerFrom(newBoard) // Revisa si hay ganador con el nuevo tablero
    if(newWinner) {
      confetti() // Si hay ganador, se lanza confetti
      setWinner(newWinner) // Si hay ganador, se actualiza el estado winner
    } else if (checkEndGame(newBoard)) {
      confetti() // Si es empate, se lanza confetti
      setWinner(false) // empate (winner es false cuando no hay ganador pero el tablero está lleno)
    }


// Funcion para cambiar el turno después de cada click (si es "X" pasa a "O" y viceversa)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>tictactoe</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      
<WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  )
}

export default App
