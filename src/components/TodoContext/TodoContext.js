// import React, { useMemo } from "react";
import React from 'react'

import { useLocalStorage } from '../../hooks/useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

    const totalTodos = todos.length
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const searchedTodos = todos.filter(todo => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    })

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    };

    const completeTodo = text => {
        const newTodos = [...todos]
        const todoIndex = todos.findIndex(todo => todo.text === text)
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const deleteTodo = text => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    // const aux = useMemo(() => (
    //     { loading, error, totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, }),
    //     [loading, error, totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo,])

    const aux = {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
    }

    return <TodoContext.Provider value={aux}>{children}</TodoContext.Provider>
}

export { TodoContext, TodoProvider }

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
// ]
