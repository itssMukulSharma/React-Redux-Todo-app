import React, { useState } from 'react'
import { addTodo } from '../redux/actions'

import { useDispatch } from 'react-redux'
import { BiCommentAdd } from "react-icons/bi"

const TodoInput = () => {
    const [name, setName] = useState()

    const dispatch = useDispatch()
    return (
        <div>
            <div className="row m-2">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="container col form-control" />
                <button
                    className="btn btn-primary mx-2 mr-5"
                    onClick={() => {
                        dispatch(addTodo(
                            {
                                name: name,
                            }
                        ))
                        setName('')
                    }}>
                    <BiCommentAdd /> Add
                </button>
            </div>
        </div>
    )
}

export default TodoInput
