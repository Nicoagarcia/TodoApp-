import React from 'react';
import Todo from './Todo';





const Todolist = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {
    return (
        <div>
            <h2 className='text-center display-7'>  Task  </h2>

            {
                todos.length === 0
                    ? (
                        <div className='text-center display-7 alert alert-primary'>
                            No tasks found
                        </div>
                    )
                    : (
                        todos.map(todo => (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                todoDelete={todoDelete}
                                todoToogleCompleted={todoToogleCompleted}
                                setTodoEdit={setTodoEdit}
                            />
                        ))

                    )




            }


        </div>

    );
}

export default Todolist;