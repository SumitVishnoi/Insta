import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios"
import { AuthContext } from "../auth.context";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {handleRegister, loading} = useContext(AuthContext)
  const navigate = useNavigate()

  if(loading) {
    <h1>Loading...</h1>
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    handleRegister(username, email, password)
    .then(res=> {
      console.log(res)
      navigate("/")
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
