import React, { useState, useEffect } from 'react';
import "../App.css"

const initialFormValues = {
    title: '',
    description: ''
}

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null)

    useEffect(() => {

        if (todoEdit) {
            setFormValues(todoEdit);
        }

        else {
            setFormValues(initialFormValues);
        }

    }, [todoEdit])

    const handleInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }

        setFormValues(changedFormValues);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            setError('Insert a title')
            return;
        }

        if (description.trim() === '') {
            setError('Insert description');
            return;
        }

        if (todoEdit) {

            todoUpdate(formValues);
            setSuccessMessage('Successfully changed');
        }
        else {
            todoAdd(formValues);
            setSuccessMessage('Successfully added');
            setFormValues(initialFormValues);
        }

        setTimeout(() => {
            setSuccessMessage(null);
        }, 2000);

        setError(null);
    }
    return (
        <div>
            <h2 className='text-center display-7'>{todoEdit ? 'Edit' : 'Create'} </h2>

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Tittle'
                    className='form-control'
                    value={title}
                    name='title'
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder='Description'
                    className='form-control mt-2'
                    value={description}
                    name='description'
                    onChange={handleInputChange}
                ></textarea>

                {
                    todoEdit &&
                    <button
                        onClick={() => setTodoEdit(null)}
                        className='btn btn-primary btn-warning mt-2'>
                        Cancel edit
                    </button>
                }

                <button className='btn btn-primary btn-block mt-2 margin'>
                    {todoEdit ? 'Update task' : 'Add task'}
                </button>
            </form>

            {
                error &&
                (
                    <div className='Alert alert-danger mt-2' >
                        {error}
                    </div>


                )
            }

            {
                successMessage &&
                (
                    <div className='Alert alert-success mt-2'>
                        {successMessage}

                    </div>
                )

            }
        </div >

    );
}

export default TodoForm; 