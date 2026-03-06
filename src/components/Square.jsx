// Componente para representar cada casilla del tablero
export const Square = ({ children, isSelected, updateBoard, index }) => {
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