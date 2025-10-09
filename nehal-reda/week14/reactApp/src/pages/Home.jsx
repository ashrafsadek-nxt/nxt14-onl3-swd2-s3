import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h1>Home</h1>

        <button className='btn btn-danger text-light m-auto' onClick={()=>navigate('/products')}>See all posts</button>
      
    </div>
  )
}

export default Home
