import React, { useState, useContext } from 'react'
import axios from 'axios';
import './LoginAuth.css'
import Signup from "./Signup"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import rentCarContext from '../context/RentCarContext';

function Login({ set }) {
  let { setUsername, setOwnername } = useContext(rentCarContext)
  let navigate = useNavigate()
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  // now creating a state to toggle between reset password and default login
  const [passwordChecker, setPasswordChecker] = useState('login')






  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter your credentials')
      return;
    } else {

      let response = await axios.post('http://localhost:5000/register/login', {
        email, password
      })
      console.log(response);
      if (response.data.message == "error") {
        alert("wrong credentials")
        return;

      } else {
        if (response.data.user.role == "admin") {
          // set.setUsertype(response.data.user.role)

          localStorage.setItem("token", response.data.accessToken);

          let res= await axios.get("http://localhost:5000/register/userauth", {
            headers: {
              "x-access-token": localStorage.getItem("token")
            }
          })
          // console.log(response.data);
          if (res.data.auth) {
            set.setAdmin(true)
            navigate("/dashboard")
            
          } else {
            alert("Not authenticated")
            navigate("/")
          }

        } else if (response.data.user.role == "owner") {
          localStorage.setItem("token", response.data.accessToken);

          let res= await axios.get("http://localhost:5000/register/userauth", {
            headers: {
              "x-access-token": localStorage.getItem("token")
            }
          })
          // console.log(response.data);
          if (res.data.auth) {
            set.setOwner(true)
            setOwnername(response.data.user.name)
            navigate("/owner")
            
            
          } else {
            alert("Not authenticated")
            navigate("/")
          }

        } else if (response.data.user.role == "user") {
          localStorage.setItem("token", response.data.accessToken);

          let res= await axios.get("http://localhost:5000/register/userauth", {
            headers: {
              "x-access-token": localStorage.getItem("token")
            }
          })
          // console.log(response.data);
          if (res.data.auth) {
            set.setUser(true)
            setUsername(response.data.user.name)
            navigate("/home")
            
            
          } else {
            alert("Not authenticated")
            navigate("/")
          }

        }
      }

    }

    // setEmail('');
    // setPassword('');

  }
  return (
    <div className='login-container bg-info'>


      <div className='login-form'>
        <div className='login-header'>
          <h2>Login Here</h2>
        </div>
        <div className='login-email'>
          <div>Email</div>
          <input type="email" placeholder='User email' onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='login-password'>
          <div>Password</div>
          <input type="password" placeholder='User password' onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className='login-btn'>
          <button type='submit' onClick={handleLogin}>Login</button>
        </div>
        <div className='login-footer'>
          <form type="submit"><Link to="/register" style={{ color: "red" }}>Don't have a account?</Link></form>
        </div>
      </div>





    </div>
  )
}

export default Login