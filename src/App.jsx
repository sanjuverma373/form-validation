import { useState } from 'react'
import './App.css'
import Formvalidation from './components/Formvalidation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Formvalidation />
    </div>
  )
}

export default App
