import React, { useState } from 'react'
import Create from './Create'

const Home = () => {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h1>Tolo List</h1>
            <br />
            <Create setTodos={setTodos} todos={todos} />

            <br />
            {
                todos.length ?
                    todos.map((todo, i) => (
                        <div key={i}>
                            <h1>{todo}</h1>
                        </div>
                    ))
                    :
                    <h1>Plz add todo</h1>
            }
        </div>
    )
}

export default Home
