import React from 'react'

const Result = ({username,email,password}) => {
  return (
    <div>
     
        <div>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
     
        </div>
  )
}

export default Result