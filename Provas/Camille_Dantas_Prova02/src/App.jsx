import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LoginForm from './components/LoginForm';
import DataJson from './components/DataJson';

function App() {

  return (
    <>
      <LoginForm />
      <DataJson />
    </>
  )
}

export default App
