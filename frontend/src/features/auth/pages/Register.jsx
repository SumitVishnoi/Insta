import React, { useState } from "react";
import { Link } from "react-router";
import axios from "axios"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/api/auth/register", {
        username,
        email,
        password
    }, {
      withCredentials: true
    })
    .then(res=> {
        console.log(res.data)
    })

    setUsername("")
    setEmail("")
    setPassword("")
  };
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            type="text"
            placeholder="Enter your username"
          />
          <input onChange={(e)=> {setEmail(e.target.value)}} value={email} type="email" placeholder="Enter your email" />
          <input onChange={(e)=> {setPassword(e.target.value)}} value={password} type="password" placeholder="Enter your password" />
          <button type="submit">sign up</button>
          <p>
            Already have an account ?{" "}
            <Link className="authToggle" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
