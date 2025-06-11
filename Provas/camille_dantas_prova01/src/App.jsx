import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import carros from './components/dados'

import Click from "./components/Click_bidirecional"
import Lista_Carros from "./components/Carros"



function App() {


  return (
    <>

      <Lista_Carros carros={carros}/>
      <Click />
    </> 

  )
}

console.log(carros)

export default App
