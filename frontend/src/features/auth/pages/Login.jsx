import React from 'react'
import '../style/form.scss'
import { Link } from 'react-router'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault()
    axios.post("http://localhost:3000/api/auth/login",{
        username,
        password
      }, {
        withCredentials: true
      })
      .then((res)=> {
        console.log(res.data)
      })
      // setUsername("")
      // setPassword("")
  }
  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=> {setUsername(e.target.value)}} value={username} type="text" placeholder='Enter your username'/>
                <input onChange={(e)=> {setPassword(e.target.value)}} value={password} type="password" placeholder='Enter your password'/>
                <button type='submit'>Login</button>
                <p>Create an account ? <Link className='authToggle' to="/register">Register</Link></p>
            </form>
        </div>
    </main>
  )
}

export default Login