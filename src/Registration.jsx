import React, { useState } from 'react'
import Result from './Result';

const Registartion = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const submit = () => {
    setCheck((prev) => !prev)
  }
  return (
    <div> 
      <h1>Registartion</h1>
      <input type='text' name='Username' placeholder='Username' onChange={(event) => setUsername(event.target.value)} />
      <input type='text' name='Email' placeholder='Email' onChange={(event) => setEmail(event.target.value)} />
      <input type='text' name='Password' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
      <button onClick={submit}>click</button>
      {
        check &&   <Result  username={username} email={email} password={password} />

      }

    </div>
  )
}

export default Registartion