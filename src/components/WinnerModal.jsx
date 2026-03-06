import { Square } from './Square.jsx'

// Componente para mostrar el modal de ganador o empate
export function WinnerModal ( { winner, resetGame }) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó: ' + winner
    
    return(
            <section className='winner'>
                <div className='text'>
                <h2>{winnerText}</h2>
        
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