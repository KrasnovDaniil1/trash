import React from 'react';
import counter from './store/counter'

// Если используем классовый компонент то подключаем библиотеку 'mobx-react' 
import {observer} from 'mobx-react-lite' 
//   Если функциональный то 'mobx-react-lite'

export const Counter = observer(() => {   // Устанавливаем наблюдение за этим компонентом
    return(
        <div className="container card bg-info">
            <div> {'count ' + counter.count}</div>
            <div>{counter.total}</div>
                <div className="card">
                    <button className="btn btn-warning" onClick={() => counter.increment()}>Прибавить</button>
                    <button className="btn btn-warning" onClick={() => counter.decrement()}>Отнять</button>
                </div>
        </div>
    )
})