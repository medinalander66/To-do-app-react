import { useState } from 'react'
import './App.css'
import ToDoContainer from './components/Container/ToDoContainer'
import Header from './components/Header'
import './css/App.css'
import Button from './components/Button'

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
