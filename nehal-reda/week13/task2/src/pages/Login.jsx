import React, { useState } from "react";
import Profile from "./profile";
// import{useNavigate} from 'react-router-dom'
import Img from "../assets/register.jpg";

const Login = () => {
  // const navigate=useNavigate()
  const [userData, setUserData] = useState(null);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setUserData({ userName, password, email, confirm });
  }
  if (userData) {
    return <Profile userData={userData} />;
    // navigate('/profile')
  }
  return (
    
    <div className="container d-flex justify-content-center align-items-center vh-50 shadow p-5 m-5">
        <div className="container d-flex justify-content-center align-items-center vh-80">
      <form onSubmit={handleLogin} className="">
        <div className="row mb-3 d-block">
          <label for="username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input style={{width:"900px"}}
              type="text"
              className="form-control w-100"
              id="username"
              value={userName}
              onChange={(e) => {setUsername(e.target.value)}}
            />
          </div>
        </div>
        <div className="row mb-3 d-block">
          <label for="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control w-100"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3 d-block">
          <label for="pass" className="col-sm-2 col-form-label">
            password
          </label>
          <div className="col-sm-10">
            <input 
            type="password"
             className="form-control w-100"
              id="pass" 
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              
              />
          </div>
        </div>
        <div className="row mb-3 d-block">
          <label for="confirm" className="col-sm-2 col-form-label">
           Confirm Password
          </label>
          <div className="col-sm-10">
            <input type="password"
             className="form-control w-100"
              id="confirm" 
              value={confirm}
              onChange={(e)=>setConfirm(e.target.value)}
              />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign in
        </button>
      </form>
      </div>
      <img src={Img} alt="vv" className="w-50" style={{width:"400px",borderRadius:"5px"}}/>
    </div>
  );
};

export default Login;
