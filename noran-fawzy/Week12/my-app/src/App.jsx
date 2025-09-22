import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Footer from './components/Footer'
import './App.css'
export default function App() {
return (
<div className="app">
<Navbar />
<div className="main-layout">
<Sidebar />
<main className="content">
<h2>Welcome Nour</h2>
<Counter />
<Todo />
</main>
</div>
<Footer />
</div>
)
}