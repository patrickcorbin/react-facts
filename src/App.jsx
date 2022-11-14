import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Navbar'
import MainComponent from './MainComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <MainComponent />
    </>
  )
}

export default App
