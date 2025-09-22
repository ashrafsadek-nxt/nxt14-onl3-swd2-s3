import React, { useState } from 'react'
export default function Todo() {
const [tasks, setTasks] = useState(['task 1', 'task 2'])
const [newTask, setNewTask] = useState('')
const addTask = () => {
if (newTask.trim() === '') return
setTasks(prev => [...prev, newTask.trim()])
setNewTask('')
}
const deleteTask = i => setTasks(prev => prev.filter((_, idx) => idx !== i))
return (
<section className="todo-section card">
<h3>Todo</h3>
<div className="todo-input">
<input
value={newTask}
onChange={e => setNewTask(e.target.value)}
placeholder="Enter a task"/>
<button onClick={addTask}>Add</button>
</div>
<ul className="todo-list">
{tasks.map((t, i) => (
<li key={i}>
<input type="checkbox" />
<span>{t}</span>
<button className="del" onClick={() => deleteTask(i)}>
Delete
</button>
</li>
))}
</ul>
</section>
)
}