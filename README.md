# 🐦 Twitter Follow Card - React Practice

Este proyecto es parte de mi proceso aprendiendo React desde cero, donde practiqué componentes reutilizables, renderizado dinámico y manejo de estado usando `useState`.

La idea fue recrear una versión simplificada de la Twitter Follow Card, incluyendo interacción real en el botón de seguir.

## 🚀 Lo que practiqué en esta lección

- ✅ Creación de componentes reutilizables
- ✅ Uso de props para pasar información dinámica
- ✅ Uso del hook `useState`
- ✅ Renderizado de listas con `.map()`
- ✅ Uso correcto de `key` en listas
- ✅ Manejo de eventos (`onClick`)
- ✅ Renderizado condicional
- ✅ Manejo dinámico de clases CSS
- ✅ Estados iniciales (`isFollowing: true / false`)
- ✅ Efectos visuales con `hover`
- ✅ Separación de lógica y datos

## 🧠 Conceptos importantes aplicados

### 🔹 Componentes reutilizables

La Follow Card fue diseñada como un componente independiente:
```jsx
export function TwitterFollowCard({ userName, children }) {
```

Permitiendo reutilizarlo múltiples veces con distintos usuarios.

### 🔹 Props

Se usaron props para:

- `userName`
- `children` (para el nombre)
- `isFollowing`
- `formatUserName` (en algunas versiones)

Ejemplo:
```jsx
<TwitterFollowCard
  key={userName}
  userName={userName}
  isFollowing={isFollowing}
>
  {name}
</TwitterFollowCard>
```

### 🔹 Renderizado de listas

Se utilizó `.map()` para renderizar múltiples usuarios dinámicamente:
```jsx
users.map(user => (
  <TwitterFollowCard
    key={user.userName}
    userName={user.userName}
    isFollowing={user.isFollowing}
  >
    {user.name}
  </TwitterFollowCard>
))
```

Entendiendo la importancia de:

- Usar `key`
- No mezclar lógica con datos
- Mantener los componentes limpios

### 🔹 useState

Se implementó estado interno para controlar el botón:
```jsx
const [isFollowing, setIsFollowing] = useState(false)
```

Y cambiarlo dinámicamente:
```jsx
const handleClick = () => {
  setIsFollowing(!isFollowing)
}
```

Esto permitió:

- Cambiar el texto del botón
- Cambiar la clase CSS
- Simular el comportamiento real de Twitter

### 🔹 Renderizado condicional
```jsx
const text = isFollowing ? "Siguiendo" : "Seguir"
```
```jsx
const buttonClassName = isFollowing
  ? "tw-followCard-button is-following"
  : "tw-followCard-button"
```

### 🔹 Hover dinámico

Se utilizó CSS para mostrar:

- "Dejar de seguir" al hacer hover
- Cambios de color dinámicos
- Transiciones suaves

Esto ayudó a imitar mejor la experiencia real de Twitter.

## 🎨 Resultado Final

La aplicación muestra:

- Dos usuarios renderizados dinámicamente
- Botón funcional que cambia estado
- Cambio visual al hacer hover
- Interacción independiente por cada card

## 🛠 Tecnologías usadas

- React
- ReactDOM
- Vite
- JavaScript (ES6+)
- CSS

## 📚 Aprendizajes clave

- Pantalla en blanco casi siempre significa error en consola.
- No se pueden usar props que no se pasan.
- La desestructuración solo funciona si la propiedad existe.
- Las listas en React necesitan `key`.
- El estado local puede sobrescribir props si no se maneja correctamente.
- Separar datos (array) de lógica (funciones) es buena práctica.

## 🎯 Objetivo de esta práctica

Entender profundamente:

- Cómo React renderiza
- Cómo funcionan los estados
- Cómo se reutilizan componentes
- Cómo manejar listas dinámicamente
- Cómo combinar lógica y estilos para crear UI interactiva