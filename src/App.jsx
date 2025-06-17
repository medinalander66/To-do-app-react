import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoContainer from './components/Container/ToDoContainer'
import Header from './components/Header'
import './css/app.css'
import Register from './components/Container/RegisterModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header/>
      <main>
        <ToDoContainer/>
      </main>
    </div>
  );
}

export default App
