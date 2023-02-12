import img from '../../assets/womaneating2.jpg'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
import './Login.css';



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
        const res = await fetch(`http://localhost:8000/auth/login`, {
        headers: {
          'Content-Type' : 'application/json'
        },
        method: "POST",
        body: JSON.stringify({email, password})
      }) 

      const data = await res.json();
      dispatch(login(data));
      navigate('/')

    }
    catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000);
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-left">
            <img src={img} alt="" className='login-leftImg' />
          </div>
          <div className="login-right">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleLogin} className='login-form'>
              <input type="email" placeholder='Type email' onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Type password' onChange={(e) => setPassword(e.target.value)} />
              <button className="login-submitBtn">Login</button>
              <p>Don't have an account <Link to='/signup'>Sign up</Link> </p>
            </form>


            {
              error && <div className="login-errorMessage">
                Wrong Password or Email !
              </div>
            }


          </div>
        </div>
      </div>
    </>
  )
}

export default Login