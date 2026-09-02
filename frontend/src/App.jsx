import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>Study Notes Assistant</h1>
    <p>Upload your notes, ask questions, and quiz yourself — all in one place.</p>
  </div>
)
}

export default App
