import React, { useState } from 'react'
import './App.css'

//Turnos
const TURNS  = {
  X: 'X',
  O: 'O'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
const className = `square ${isSelected ? 'is-selected' : ''}`

// Función para manejar el click en la casilla
// onCLick llama a updateBoard con el index de la casilla para actualizar el tablero
const handleClick = () => {
  updateBoard(index)
} 

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
// Se setea el tablero con 9 posiciones vacías (null)
  const [board, setBoard] = useState(Array(9).fill(null))

// Se setea el turno inicial en "X"
  const [turn, setTurn] = useState(TURNS.X)

// Función para actualizar el tablero cuando se hace click en una casilla (se llama en el componente Square)
  const updateBoard = (index) => {
    const newBoard = [...board] // Nuevo tablero
    newBoard[index] = turn // "X" o "O"
    setBoard(newBoard)

// Funcion para cambiar el turno después de cada click (si es "X" pasa a "O" y viceversa)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>tictactoe</h1>
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
    </main>
  )
}

export default App
