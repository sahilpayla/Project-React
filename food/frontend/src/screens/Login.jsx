import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Login = () => {

  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/loginuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials")
    }

    // navigation to main page after login 
    if (json.success) {
      localStorage.setItem("authToken", json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate('/')
    }
    

  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }


  return (
    <div>

      <div className="container">
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange} />
          </div>

          <button type="submit" className="btn btn-success">Login</button>
          <Link to="/createuser" className='m-3 btn btn-primary '>Register Here </Link>
        </form>
      </div>

    </div>
  )
}

export default Login