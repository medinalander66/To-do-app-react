import { useState } from 'react'
import './App.css'
import ToDoContainer from './components/Container/ToDoContainer'
import Header from './components/Header'

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
