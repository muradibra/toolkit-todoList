import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './features/todoSlice/todoSlice'
import AddTodo from './components/AddTodo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todos from './components/Todos'

function App() {

  const dispatch = useDispatch()

  return (
    <div className='app'>
      <div className='container'>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App