import React, { useState } from 'react'
import {  useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import Card from '../compontent/Card'

const ProductDetials  = () => {
  const {productId}=useParams();
  // const navigate=useNavigate();
  const [product,setproduct]=useState({});

      useEffect( ()=>{
          async function getproduct() {
            try{
              
              let {data}= await axios.get('https://fakestoreapi.com/products/' + productId);

              setproduct(data);
            }catch(err){
              console.error(err);
              
            }
              
          }
          getproduct();
  
          },[productId])


  return (


    <div>
      {/* <h1>productDetials</h1> */}

      <div className='container'>
{/* <Card product={product}/> */}
<img src={product.image} alt="" />
<h3>{product.title}</h3>
<p>{product.description}</p>
<button className='btn btn-danger'>Add to card</button>
      </div>
      
    </div>
  )
}

export default ProductDetials 
