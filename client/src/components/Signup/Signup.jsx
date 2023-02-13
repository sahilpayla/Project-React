import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../assets/womaneating.jpg'
import { register } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'

const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = async(e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:8000/auth/register`, {
        headers: {
          "Content-Type": 'application/json'
        },
        method: "POST",
        body: JSON.stringify({username, email, password})
      })

      const data = await res.json()
      dispatch(register(data))
      navigate('/')
      
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }


  return (
    <>
      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="signup-leftSide">
            <img src={img} alt="" className='signup-leftImg' />
          </div>
          <div className="signup-rightSide">
            <h2 className="signup-title">Sign up</h2>
            <form onSubmit={handleSignup} className="signup-form">
              <input type="text" placeholder='Type username' onChange={(e) => setUsername(e.target.value)} />
              <input type="email" placeholder='Type email' onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Type password' onChange={(e) => setPassword(e.target.value)} />
              <button className='signup-submitBtn'>Sign up</button>
              <p>Already have account ? <Link to='/login'>Login</Link> </p>
            </form>

            {
              error && (
                <div className="signup-errorMessage">
                  Wrong Credentials !!
                </div>
              )
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Signup