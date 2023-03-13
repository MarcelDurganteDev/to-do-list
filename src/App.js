import React, { useState } from 'react';
import './App.css';

function App() {
	const [todoList, setTodoList] = useState([]);
	const [newTask, setNewTask] = useState('');

	const handleChange = (event) => {
		setNewTask(event.target.value);
	};

	const handleAddTask = (newTask) => {
		const newTodoList = [...todoList, newTask];
		setTodoList(newTodoList);
	};

	return (
		<div className='App'>
			<h1>To-Do List</h1>
			<div className='add-task'>
				<input type='text' onChange={handleChange} />
				<button onClick={handleAddTask} className='btn-add'>
					Add
				</button>
			</div>
			<div className='list'>
				{newTask}
				{todoList.map((task) => {
					return <h1>{task}</h1>;
				})}
			</div>
		</div>
	);
}

export default App;
