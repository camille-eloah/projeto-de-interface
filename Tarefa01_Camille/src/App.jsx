import { useState } from 'react'
import './App.css'

import ThemeToggle from "./components/ThemeToggle";
import Card from './components/Card'
import Galeria from "./components/Galeria";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Galeria />

    </>
  )
}

export default App
