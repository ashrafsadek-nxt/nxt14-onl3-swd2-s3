import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import Card from '../compontent/Card';

const Products = () => {
    let [products,setproducts]=useState([]);
    // let navigate=useNavigate();


    useEffect( ()=>{
        async function getproducts() {
          try{
            let {data}= await axios.get('https://fakestoreapi.com/products');
            setproducts(data);
          }catch(err){
            console.error(err);
            
          }
            
        }
        getproducts();

        },[])
  return (
    <div>
      <h1>products</h1>
      <div className="container d-flex flex-wrap gap-3 justify-content-center">
          {products.map((p)=>(
           <div key={p.id}>
            <Card product={p}/>
           </div>

          ))}

      </div>
    </div>
  )
}

export default Products
