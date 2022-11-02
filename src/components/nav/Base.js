import React from 'react'
import {Link, Outlet} from 'react-router-dom'
// import User from '../user/User'
import Logo from '../../image/task.png'
// import { cookie } from 'express/lib/response'
import axios from 'axios'
import cookie from 'js-cookie'

export default function Base(){

  const removeCookie = (key) =>{
    if(window !== "undefined"){
      cookie.remove(key, {expires: 1});
    }
  }

  const logout = async () =>{
    await axios ({
      method: "get",
      url:`${process.env.REACT_APP_API_URL}users/logout`,
      // withCredentials: true
    })
      .then(() =>{
        removeCookie("jwt");
        window.location = '/';
      })
      .catch((err) => console.log("tsy mande ->"+err));
  }
    
  return(
      <div className="wrapper ">
          <div className="sidebar" data-color="black">
            <div className="logo" style={{backgroundColor:'blue', textAlign: 'center'}}>
              <img src={Logo} width="40%" alt="homepage"/>
            </div>
            <div className="sidebar-wrapper" id="sidebar-wrapper">

              <ul className="nav">
                  <li>
                    <Link to="/acceuil">
                      <i className="now-ui-icons design_app" style={{color:'white'}} />
                      <p style={{color:'white'}}>Accueil</p>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/acceuil/addUser">
                      <i className="now-ui-icons users_single-02" style={{color:'white'}} />
                      <p style={{color:'white'}}>Ajouter l'utilisateur</p>
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/acceuil/ajoutTask">
                      <i className="now-ui-icons business_badge" style={{color:'white'}} />
                      <p style={{color:'white'}}>Ajouter une tâche</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/acceuil">
                        <i className="now-ui-icons users_single-02" style={{color:'white'}} />
                      <p style={{color:'white'}}>Liste des tâches</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/acceuil/calender">
                      <i className="now-ui-icons business_badge" style={{color:'white'}} />
                      <p style={{color:'white'}}>Mon calendrier</p>
                    </Link>
                  </li>         
                  <li>
                    <Link to="/acceuil/inscriptionAgent">
                      {/* <i className="now-ui-icons business_badge" style={{color:'white'}} /> */}
                      <p style={{color:'white' ,textAlign:'center'}}>A propos</p>
                    </Link>
                  </li>
                  <li className="text-center p-20 upgrade-btn" onClick={logout}>
                    <Link to="" className="btn d-grid btn-warning text-white" style={{color:'white'}} type="submit">
                      <span style={{color:'white'}}> Deconnexion </span>
                    </Link>
                  </li>
              </ul>

            </div>
          </div>

          <div className="main-panel" id="main-panel">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
              <div className="container-fluid">
                <div className="navbar-wrapper">
                  <div className="navbar-toggle">
                    <button type="button" className="navbar-toggler">
                      <span className="navbar-toggler-bar bar1" />
                      <span className="navbar-toggler-bar bar2" />
                      <span className="navbar-toggler-bar bar3" />
                    </button>
                  </div>
                  <h3 style={{marginTop: 10, marginLeft: 20}}>Task management</h3>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-bar navbar-kebab" />
                  <span className="navbar-toggler-bar navbar-kebab" />
                  <span className="navbar-toggler-bar navbar-kebab" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                  <form>
                    <div className="input-group no-border">
                      <input style={{borderTopLeftRadius:50,borderBottomLeftRadius:50}} type="text" className="form-control" placeholder="Recherche..." />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <i className="now-ui-icons ui-1_zoom-bold" />
                        </div>
                      </div>
                    </div>
                  </form>
                  <p style={{marginLeft: 50,color:'white'}}>Bienvenue, <span><b>user</b></span></p>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="now-ui-icons users_single-02" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* End Navbar */}
            <div className="panel-header panel-header-sm">
            </div>
            <div className="content">
              
                <Outlet/>
                    
              <footer className="footer text-center" style={{paddingTop: 50, paddingBottom: '50px', backgroundColor: "gray"}}> 
                  2022 © Copyright
              </footer>
            </div>
          </div>
        </div>
  )
}