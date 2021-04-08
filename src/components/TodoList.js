import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux';
import { getTodo } from '../redux/actions'

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state)
    useEffect(() => {
        setTimeout(() => dispatch(getTodo()), 3000)
    }, [])
    return (
        <div className="my-4">
            {todos ? todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />
            }) : null}
        </div>
    )
}

export default TodoList
