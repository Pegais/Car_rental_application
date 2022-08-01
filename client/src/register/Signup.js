import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import "./LoginAuth.css"
import {Link} from "react-router-dom"

function Signup() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [role, setRole] = useState('');

  const handleClick = async () => {
    if (!name || !email || !password || !role) {
      alert("please enter all credentials")
      return;
    } else if (password.length <= 4) {
      alert("please enter correct password length")
      return;
    } else {
      let response = await axios.post('http://localhost:5000/register/', {
      name, email, password, role
    })
    // console.log(response.data);
      alert("data inserted succesfully")
    setName('');
    setEmail('');
    setPassword('');
    setRole('');
    }
    
  }
  return (
  
    <div className='login-container bg-info'>


      <div className='login-form'>
        <div className='login-header'>
          <h2>Register Here</h2>
        </div>
        <div className='login-email'>
          <div>Name</div>
          <input type="text" placeholder='User Name' onChange={(e) => setName(e.target.value)} value={name}></input>
        </div>
        <div className='login-password'>
          <div>Email</div>
          <input type="email" placeholder='User Email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
        </div>
        <div className='login-password'>
          <div>Password</div>
          <input type="password" placeholder='User password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
          
        </div>
        <div className='login-password'>
          <div>Role</div>
          <input type="text" placeholder='User Role' onChange={(e) => setRole(e.target.value)} value={role}></input>
        </div>
        <div className='login-btn'>
          <button type='submit' onClick={handleClick}>Register</button>
        </div>
        <div className='login-password'>
          <div>Alreadt registered ? <Link to="/login">login here</Link></div>
        </div>

      </div>






    </div>
  )
}

export default Signup