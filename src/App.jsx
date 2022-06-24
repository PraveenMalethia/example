import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [completed, setCompleted] = useState(false)
  useEffect(() => {
    if (count <= 99) {
      setTimeout(() => {
        setCount((prev) => prev + 1)
      }, 100)
    } else {
      setCompleted(true)
    }
  }, [count, completed])
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Downloading {count} % :</p>
        <p>
          <progress id='progress' value={count} max='100'></progress>
        </p>
      </header>
    </div>
  )
}

export default App
