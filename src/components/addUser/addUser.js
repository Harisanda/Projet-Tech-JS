// import { cookie, json } from 'express/lib/response';
import React, { useState } from 'react'
import Logo from '../../image/girl.png'
import axios from 'axios'
import Login from '../login/Login';

export default function AddUser() {
  const [formSubmit, setFormSuubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handelRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById('terms');
    // const pseudoError = document.querySelector('.pseudo.error');
    // const emailError = document.querySelector('.email.error');
    const passwordConfirmError = document.querySelector('.password-confirm.error');
    const termsError = document.querySelector('.terms.error');

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";

      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}users/register`,
        data: {
          name,
          email,
          password
        }
      })
        .then((res) => {
          console.log(res);
          setFormSuubmit(true);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      {formSubmit ? (
        <>
          <Login />
          <h4>Enregistrement réussir, veuillez vous connecter maintenant!</h4>
        </>
      ) : (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body" id=""></div>
              <div className="content" style={{ marginTop: 90, marginBottom: 100 }}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6" style={{ textAlign: 'center' }}>
                      <img src={Logo} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-md-6 contents" style={{ marginTop: 50 }}>
                      <div className="row justify-content-center">
                        <div className="col-md-8" style={{ marginTop: '-10px', textAlign: 'center' }}>
                          <div className="mb-4">
                            <h3 style={{ fontWeight: 'bolder' }}>Inscription</h3>
                            <p className="mb-4">Bienvenue, veuillez-vous inscrire s'il vous plait.</p>
                          </div>
                          <form action="" onSubmit={handelRegister}>
                            <div className="form-group first">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Username..."
                                name="username"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                              />
                              <div className='pseudo error'></div>
                            </div>

                            <div className="form-group first">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="E-mail..."
                                name="email"
                                id='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                              />
                              <div className='email error'></div>
                            </div>
                            <div className="form-group first">
                              <input
                                className="form-control"
                                type="password"
                                placeholder="Mot de passe..."
                                name="password"
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                              />
                            </div>
                            <div className="form-group last mb-4">
                              <input
                                className="form-control"
                                type="password"
                                placeholder="Confirmer votre mot de passe..."
                                name="password"
                                id='password-conf'
                                onChange={(e) => setControlPassword(e.target.value)}
                                value={controlPassword}
                              />
                              <div className='password-confirm error'></div>
                            </div>
                            <br />
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">j'accepte les <a href="/" target="_target" rel="noopener noreferrer">
                              les conditions générales</a>
                            </label>
                            <div className="terms error"></div>
                            <br />
                            <input type="submit" id="btn" defaultValue="Valider" className="btn btn-block btn-primary" name="CreateUser" value="Valider" />

                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}