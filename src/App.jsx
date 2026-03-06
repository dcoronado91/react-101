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

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
// Se setea el tablero con 9 posiciones vacías (null)
  const [board, setBoard] = useState(Array(9).fill(null))

// Se setea el turno inicial en "X"
  const [turn, setTurn] = useState(TURNS.X)

const [winner, setWinner] = useState(null) // Estado para almacenar el ganador, inicialmente es null, si hay ganador se actualiza con "X" o "O"

//Revisa si hay ganador despues de cada movimiento, si hay ganador se actualiza el estado winner
const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] && //Chequea que la casilla no esté vacía
      boardToCheck[a] === boardToCheck[b] && //Chequea que las casillas a y b sean iguales
      boardToCheck[a] === boardToCheck[c]) { //Si a y b son iguales, chequea que las casillas a y c sean iguales
      return boardToCheck[a]
    }
  }
  return null // Si no hay ganador, devuelve null
}

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
    const newWinner = checkWinner(newBoard) // Revisa si hay ganador con el nuevo tablero
    if(newWinner) {
      setWinner(newWinner) // Si hay ganador, se actualiza el estado winner
    }

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
      
{
  winner !== null && (
    <section className='winner'>
      <div className='text'>
        <h2>
          {
            winner === false
            ? 'Empate'
            : 'Ganó: ' + winner
          }
        </h2>

        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Reiniciar juego</button>
        </footer>
      </div>
    </section>
  )
}

    </main>
  )
}

export default App
