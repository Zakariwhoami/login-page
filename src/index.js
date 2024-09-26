import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Messageboard from './Messageboard';
import Submit from './Submit';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
    
  // </React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Messageboard/Dashboard" element={<Dashboard />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Messageboard" element={<Messageboard />} />
      <Route path="Messageboard/Dashboard/Submit" element={<Submit/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
