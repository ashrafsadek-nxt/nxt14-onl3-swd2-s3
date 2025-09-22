import React, { useState } from 'react'
export default function Counter() {
const [count, setCount] = useState(100)
return (
<section className="counter-section card">
<h3>Counter</h3>
<p className="count-display">Count: {count}</p>
<div className="buttons">
<button onClick={() => setCount(c => c + 1)}>+1</button>
<button onClick={() => setCount(100)}>Reset</button>
<button onClick={() => setCount(c => c - 1)}>-1</button>
</div>
</section>
)
}