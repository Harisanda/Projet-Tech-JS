import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App'
import ConsulterAgent from './components/consulterAgent/consulterAgent'


//ReactDOM.render(<GestionUser/>, document.getElementById('root'))
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, 
  document.getElementById('root')
);

