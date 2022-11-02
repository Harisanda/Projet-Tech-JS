import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleLogin = async (e) =>{
    e.preventDefault();

    const passwordOrEmail = document.querySelector('.passwordOrEmail.error');
    // const passwordError = document.querySelector('.password .error');

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}users/login`,
      // withCredentials: true,
      data:{
        email,
        password
      }
    })
      .then((res) =>{
        console.log(res);
        if(res.data.error){
          passwordOrEmail.innerHTML = res.data.error;
        } else {
          window.location = '/acceuil';
        }
        // window.location = '/';
      })
      .catch((err) => console.log("erreur"+err));
  }

  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
            <form className="login100-form validate-form flex-sb flex-w" onSubmit={handleLogin}>
              <span className="login100-form-title p-b-32">
                Account Login
              </span>

              <span className="txt1 p-b-11">
                Email
              </span>
              <div className="wrap-input100 validate-input m-b-36" data-validate="Username is required">
                <input 
                  className="input100" 
                  type="text" 
                  name="email"
                  id='email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  />
                  <div className='email error'></div>
                <span className="focus-input100"></span>
              </div>

              <span className="txt1 p-b-11">Password</span>
              <div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
                <span className="btn-show-pass">
                  <i className="fa fa-eye"></i>
                </span>
                <input 
                  className="input100" 
                  type="password" 
                  name="password" 
                  id='password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span className="focus-input100"></span>
              </div>

              <div className="flex-sb-m w-full p-b-48">
                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label className="label-checkbox100" for="ckb1">Remember me</label>
                </div>

                <div>
                  <a href="#" className="txt3">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className='passwordOrEmail error'></div>
              <input type="submit" value="Login" className="login100-form-btn" style={{ textDecoration: 'none' }}/>
              {/* <div className="container-login100-form-btn">

                <Link to="/acceuil" className="login100-form-btn" style={{ textDecoration: 'none' }}>Login</Link>

              </div> */}

            </form>
          </div>
        </div>
      </div>
    </>
  )
}