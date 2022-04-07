import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login';
import Signup from './components/signup';
import Contactus from './components/contact-us';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/Signup" element= {<Signup/>}/>
        <Route path="/Contact-us" element= {<Contactus/>}/>


       </Routes>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
