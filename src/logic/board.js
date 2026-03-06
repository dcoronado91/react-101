import { WINNER_COMBOS } from '../constants.js'

//Revisa si hay ganador despues de cada movimiento, si hay ganador se actualiza el estado winner
export const checkWinnerFrom = (boardToCheck) => {
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

// Revisa si el tablero está lleno (no hay casillas vacías)
export const checkEndGame = (newBoard) => {
    return newBoard.every(square => square !== null)
}