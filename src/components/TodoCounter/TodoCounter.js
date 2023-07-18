import './TodoCounter.css'
function TodoCounter({ total, completed }) {
    return (
        <h1 className="TodoCounter">
            HAS COMPLETADO <span>{completed}</span>
            DE <span>{total}</span> TODOS
        </h1>
    )
}

export { TodoCounter }