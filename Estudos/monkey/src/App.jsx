import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ThemeToggle from './components/ThemeToggle';
import TextBackgroundChanger from './components/TextBackgroundChanger'
import TextBackgroundChanger2 from './components/TextBackgroundChanger2'
import TextBackgroundChanger3 from './components/TextBackgroundChanger2'
import LoginForm from './components/LoginForm';
import PostList from './components/PostList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeToggle />
      <TextBackgroundChanger />
      <TextBackgroundChanger2 />
      <TextBackgroundChanger3 />
      <LoginForm />
      <PostList />
      
      <div className="card">
        <p>Olha, um contador...</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
