import React from 'react'
import '../App.css'

const Todo = ({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) => {

    return (
        <div className='card mt-2'>
            <div className='card-body'>
                <h3 className='card-tittle text-center'>
                    {todo.title}
                </h3>
                <p className='card-text text-center'>
                    {todo.description}
                </p>
                <hr />
                <div className='d-flex justify-content-end'>
                    <button
                        onClick={() => setTodoEdit(todo)}
                        className=' btn btn-sm btn-outline-primary mr-2'>
                        Edit
                    </button>
                    <button
                        onClick={() => todoDelete(todo.id)}
                        className='btn btn-sm btn-danger margin'>
                        Remove
                    </button>
                    <button
                        onClick={() => todoToogleCompleted(todo.id)}
                        className='btn btn-sm btn-outline-success ml-2 margin'
                    >
                        {todo.completed ? 'Complete' : 'Completed'}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Todo; 