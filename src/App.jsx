import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {

  const [todos, setTodos] = useState([
  {
        id:1,
        text: "criar funcionalidade x no sistema",
        category: "Trabalho",
        isCompleted: false,
      },
      {
        id:2,
        text: "Ir pra academia",
        category: "Pessoal",
        isCompleted: false,
      },
      {
        id:3,
        text: "Estudar React",
        category: "Estudos",
        isCompleted: false,
      }
  ])

  const addTodo = (text, category) =>{
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const otherNewTodos = [...todos];
    const filteredTodos = otherNewTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const complete = (id) => {
    const anotherNewTodos = [...todos];
    anotherNewTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(anotherNewTodos);
  }

   return (
    <div className='app'>
      <h1>Lista</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo = {todo} key={todo.id} remove={removeTodo} complete={complete}/>
        ))}
      </div>
      <TodoForm addTodo = {addTodo}/>
    </div>
    )
}

export default App
