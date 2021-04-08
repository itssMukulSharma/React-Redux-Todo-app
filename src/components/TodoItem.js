import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions'
import { MdDelete } from "react-icons/md"
import { BiEdit } from "react-icons/bi"
import { MdUpdate } from "react-icons/md"

const TodoItem = ({ todo }) => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(todo.name)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>
                    {todo.id.length > 1 ? todo.id[2] : todo.id}
                </div>
                <div className="col">
                    {edit ?
                        <input type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)} /> :
                        <h4>{todo.name}</h4>}
                </div>
                <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updateTodo(
                            {
                                ...todo,
                                name: name
                            }
                        ))
                        if (edit) {
                            setName(todo.name)
                        }
                        setEdit(!edit)
                    }} >
                    {edit ? <><MdUpdate /> Update </> : <><BiEdit /> Edit</>}
                </button>
                <button
                    className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}>
                    <MdDelete />
                </button>
            </div>
        </div>
    )
}

export default TodoItem
