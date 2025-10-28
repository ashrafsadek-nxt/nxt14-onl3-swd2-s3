import { useState } from 'react'

function Welcome(){
   const[times,setTimes]=useState(0);

   const handleTimes =() =>{
    setTimes(times+1);
   };

    return(
        <>
        <div className="container w-75">
          <h2>Welcome to our Website</h2>
          <p>How much time you visit Egypt ?</p>
          <p>Click in the Button to Know The number of times</p>
          <button className="btn btn-info" onClick={handleTimes}>Times:{times}</button>
        </div>
        </>
    );
}
export default Welcome