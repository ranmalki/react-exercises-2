import React,{useState} from 'react';
import './Todo.css';


function Todo() {
	const [todos, setTodos] = useState(['Study','Practice','Play','Eat'])
	const [value, setValue] = useState('')

	function onSubmit(event) {
        event.preventDefault();
        if(!value.trim().length){
            return;
        }
		addTodo(value);
        setValue('');
    }

	function addTodo(todo) {
		setTodos([...todos, todo])
		console.log(todos);

	}

	function deleteTask(index) {
		setTodos(todos.filter((todo)=>todo !== todos[index]))
	}
	
	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<form onSubmit={onSubmit}>
			<input placeholder="Your task..." onChange={(event)=>setValue(event.target.value)} /> 
			<button >Add task</button>
			</form>
			<ul>
			{todos.map((todo,i)=>
			<li key={i}>{todo} <button onClick={()=>deleteTask(i)}>Delete</button></li>)}
			</ul>
		</div>
	)
}

export default Todo;