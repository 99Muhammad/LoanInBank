import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoanForm from './LoanForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ marginTop: "250px" }}>
    <LoanForm />
  </div>
    
  )
}

export default App
