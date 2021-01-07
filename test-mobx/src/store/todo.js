import { makeAutoObservable } from "mobx"

class Todo {
    constructor() {
        makeAutoObservable(this)
    }

    todos = [
        {id:1 , title:'Изучи Html и Css' , completed: false} ,
        {id:2 , title:'Изучи React и MobX' , completed: false} ,
        {id:3 , title:'Изучи nodeJS и nginx' , completed: false}
        ]

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id == id ? {...todo ,  completed: !todo.completed} : todo)
    }

    fetchTodo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos , ...json]
            })
    }
}

export default new Todo()