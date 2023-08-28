import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo, removeTodo } from '../features/todoSlice/todoSlice'

function Todos() {
    const [newInput, setNewInput] = useState("")
    const [editedItemId, setEditedItemId] = useState(null)
    const [toggleUpdate, setToggleUpdate] = useState(false)
    const todos = useSelector(state => state.todoReducer.todos)
    const dispatch = useDispatch()

    const handleEdit = (item) => {
        setToggleUpdate(!toggleUpdate)
        setEditedItemId(item.id)
        setNewInput(item.todo)
    }

    const handleSave = (item) => {
        dispatch(editTodo({id: item.id, newTodo: newInput}))
        setToggleUpdate(false)
        setEditedItemId(null)
    }

    return (
        <div>
            {
                todos.length > 0 &&
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Todo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    {
                                        toggleUpdate && editedItemId === item.id ?
                                            <td>
                                                <input
                                                    type="text"
                                                    value={newInput}
                                                    onChange={(e) => setNewInput(e.target.value)}
                                                />
                                            </td>
                                            :
                                            <td>{item.todo}</td>
                                    }
                                    <td className='d-flex gap-2'>
                                        {
                                            toggleUpdate && editedItemId === item.id ?
                                                <button
                                                    className='btn btn-success'
                                                    onClick={() => handleSave(item)}
                                                >
                                                    Save
                                                </button>
                                                :
                                                <button
                                                    className='btn btn-warning'
                                                    onClick={() => handleEdit(item)}
                                                >
                                                    Edit
                                                </button>
                                        }

                                        <button
                                            className='btn btn-danger'
                                            onClick={() => dispatch(removeTodo(item.id))}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }

        </div>
    )
}

export default Todos