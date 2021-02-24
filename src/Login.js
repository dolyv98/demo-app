import React, { useEffect, useState } from "react";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => setEmail(email), [email])
  useEffect(() => setPassword(password), [password])

  function handleSubmit() {
    console.log(email);
    console.log(password);
  }

  return (
      <form>
      <div>
        <div>
        <label>
          Username:
          <input type="text" name="name" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        </label>
        </div>
        <div>
        <label>
          Password:
          <input type="password" name="pass" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        </label>
        </div>
        <input type="submit" value="Submit" onClick = {handleSubmit}/></div>
      </form>
  );
}

export default Login