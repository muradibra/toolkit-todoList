import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice/todoSlice'

function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch() 
    const add = (input) => {
        if(!input) {
            return
        }

        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className='m-2'>
            <input
                type="text"
                placeholder='Add Todo'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button
                className='btn btn-primary ms-2 btn-sm'
                onClick={() => add(input)}
            >
                Click
            </button>
        </div>
    )
}

export default AddTodo