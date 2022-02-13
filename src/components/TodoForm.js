import React, { useState, useEffect } from 'react';

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
            setError('Debes indicar un titulo')
            return;
        }

        if (description.trim() === '') {
            setError('Debes indicar una descripcion');
            return;
        }

        if (todoEdit) {
            //actualizando
            todoUpdate(formValues);
            setSuccessMessage('Modificado con exito');
        }
        else {
            todoAdd(formValues);
            setSuccessMessage('Agregado con exito');
            setFormValues(initialFormValues);
        }

        // Agregar tareas


        setTimeout(() => {
            setSuccessMessage(null);
        }, 2000);

        setError(null);
    }
    return (
        <div>
            <h2 className='text-center display-7'>{todoEdit ? 'editar tarea' : 'Nueva tarea'} </h2>

            {
                todoEdit &&
                <button
                    onClick={() => setTodoEdit(null)}
                    className='btn btn-sm btn-warning mb-2'>
                    Cancelar edicion
                </button>
            }


            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='titulo'
                    className='form-control'
                    value={title}
                    name='title'
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder='descripcion'
                    className='form-control mt-2'
                    value={description}
                    name='description'
                    onChange={handleInputChange}
                ></textarea>

                <button
                    className='btn btn-primary btn-block mt-2'
                > {todoEdit ? 'Actualizar tarea' : 'Agregar Tarea'}
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
        </div>

    );
}

export default TodoForm; 