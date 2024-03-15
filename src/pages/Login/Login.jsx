
import React from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'

let user = {
    addres: '123',
    passwor: '123'
  }
  function Login({ mode }) {
    const nawigate = useNavigate()
    function fnIn(e) {
      e.preventDefault()
      let a = e.target.email.value;
      let p = e.target.password.value;
      if (user.addres == a && user.passwor == p) {
        nawigate('/')
        window.sessionStorage.setItem('tokin', 'dyhbghthtda')
      }
      else {
        nawigate('/login')
      }
    }
    return (
      <div className='SIngup'>
        <div className="singup__inner">
          <h2>Get Started Now</h2>
          <h6>Enter your Credentials to access your account</h6>
          <form onSubmit={fnIn} action="#" className='sing__form'>
            {/* <div className='div__form'>
                          <label htmlFor="name">name</label>
                          <input id='name' type="text" placeholder='Enter your name' />
                      </div> */}
  
  
            <div className='div__form'>
              <label htmlFor="email">Email address</label>
              <input id='email' type="text" placeholder='Enter your email' name='email' />
            </div>
  
            <div className='div__form'>
              <div className='forget'>  <label htmlFor="password">Password</label> <span>forgot password</span></div>
              <input id='password' type="text" placeholder='Enter your Password' name='password' />
            </div>
  
            <div className='div__label'>
              <input className='inpp' id='agree' type="checkbox" />
              <label className='labell' htmlFor="agree">Remember for 30 days</label>
            </div>
  
            <button type='submit'>Login</button>
  
          </form>
  
          <div className='sing__line'>
            <hr /> Or <hr />
          </div>
          <div className='sing__app'>
            <a href="#"><i className="bi bi-google">Sign in with Google</i></a>
            <a href="#"><i className="bi bi-apple">Sign in with Apple</i></a>
          </div>
          <div className='sing__mode'>
            Have an account? <button onClick={() => mode(true)}>Sign Up</button>
          </div>
  
        </div>
      </div>
    )
  }

export default Login