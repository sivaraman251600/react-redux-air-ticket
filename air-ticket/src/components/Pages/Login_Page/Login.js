import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../Login_Page/Login.css"

function Login() {
  const [fetchedRegistrationDetails, setFetchedRegistrationDetails] = useState([])
  const [fetchingRegistrationError, setFetchingRegistrationError] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:3001/RegistartionDetails")
    .then((res)=> setFetchedRegistrationDetails(res.data))
    .catch((err)=> setFetchingRegistrationError(err))
  },[])
  return (
    <div className='login-wrapper'>
        <h2>Login</h2>
        <div className='login-form-wrapper'>
        <label htmlFor='emailid'>Email Id</label>
        <input type={"email"} /> <br/>
        <label htmlFor='password'>Password</label>
        <input type={"password"}/> <br/>
        <button className='login-button'>Login</button>
        </div>
    </div>
  )
}

export default Login