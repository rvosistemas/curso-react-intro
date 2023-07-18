import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext'

import './TodoSearch.css'

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    return (
        <input
            className='TodoSearch'
            placeholder="Sacar al perro"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }
            }
        />
    )
}

export { TodoSearch }
