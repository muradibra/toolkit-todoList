import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // const { id } = action.payload
            // console.log("id", action.payload);
            state.todos = state.todos.filter(item => item.id !== action.payload)
        },
        editTodo: (state, action) => {
            const {id, newTodo} = action.payload
            const editedItem = state.todos.find(item => item.id === id)
            editedItem.todo = newTodo
        }
    }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer