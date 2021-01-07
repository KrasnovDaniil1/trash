import React from 'react';
import todo from './store/todo'
// Если используем классовый компонент то подключаем библиотеку 'mobx-react' 
import {observer} from 'mobx-react-lite' 
//   Если функциональный то 'mobx-react-lite'

export const Todo = observer(() => {   // Устанавливаем наблюдение за этим компонентом
    return(
        <div className="container bg-success">
            <button className="btn btn-info" onClick={() => todo.fetchTodo()}>FetchTodo</button>
            
            {todo.todos.map(t => 
                <div key={t.id } className="todo">
                    <input type="checkbox" 
                        checked={t.completed} 
                        onChange={() => todo.completeTodo(t.id)}                            
                        />
                    {t.title} 
                    <button className="btn btn-info" onClick={() => todo.removeTodo(t.id)}>Удалить</button>
                </div>
            ) }

        </div>
    )
})