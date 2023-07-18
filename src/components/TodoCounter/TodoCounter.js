import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext'

import './TodoCounter.css'
function TodoCounter() {

    const { totalTodos, completedTodos } = React.useContext(TodoContext)

    return (
        <h1 className="TodoCounter">
            HAS COMPLETADO <span>{completedTodos}</span>
            DE <span>{totalTodos}</span> TODOS
        </h1>
    )
}

export { TodoCounter }