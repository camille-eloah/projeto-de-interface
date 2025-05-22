import { useState } from 'react'
import './App.css'

import ThemeToggle from "./components/ThemeToggle";
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <ThemeToggle/>
      <Card />

    </>
  )
}

export default App
