import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import "../Login_Page/Login.css"

function Login() {
  const [fetchedRegistrationDetails, setFetchedRegistrationDetails] = useState([])
  const [fetchingRegistrationError, setFetchingRegistrationError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigateToMainPage = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:3001/RegistartionDetails")
    .then((res)=> setFetchedRegistrationDetails(res.data))
    .catch((err)=> setFetchingRegistrationError(err))
  },[])

  const login = () => {
    for(let fetchDetail of fetchedRegistrationDetails){
      for(let i = 0; i < fetchedRegistrationDetails.length; i++){
      if(fetchDetail.emailid === email && fetchDetail.password === password){
        console.log("Login Success")
        navigateToMainPage("/mainpage")
        break;
      }
    }
  }
}
  return (
    <div className='login-wrapper'>
        <h2>Login</h2>
        <div className='login-form-wrapper'>
        <label htmlFor='emailid'>Email Id</label>
        <input type={"email"} onChange={(e)=>setEmail(e.target.value)}/> <br/>
        <label htmlFor='password'>Password</label>
        <input type={"password"} onChange={(e)=>setPassword(e.target.value)}/> <br/>
        <button className='login-button' onClick={()=>login()}>Login</button>
        </div>
    </div>
  )
}

export default Login