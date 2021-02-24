import React, { useEffect, useState } from "react";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // these 2 function is unnecessary. 
  // It means when value of email change we need to change value of email again 
  // Please remove these 2 effect
  useEffect(() => setEmail(email), [email])
  useEffect(() => setPassword(password), [password])

  const handleSubmit = () => {
    console.log(email);
    console.log(password);
  }

  // event already pass automatically
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)

  }

  return (
    <form>
      <div>
        <div>
          <label>
            Username:
          {/*  
          We shouldn't use arrow here onChange .
          You can find the reason here
          https://stackoverflow.com/questions/52413015/react-onchange-functions-with-es6-arrows-or-not
          I change the email for you. Then you can change the password
           */}
            <input type="text" name="name" value={email} onChange={handleChangeEmail} />
          </label>
        </div>
        <div>
          <label>
            Password:
          <input type="password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <input type="submit" value="Submit" onClick={handleSubmit} /></div>
    </form>
  );
}

export default Login