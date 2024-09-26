import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import "../src/css/style.css";
import logo from "../src/img/edusaf1.png";
import logo2 from "../src/img/ITN.png";
import { useState } from 'react';
import { useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAdmin, setIsAdmin] = useState();
  const [isFocus, setIsFocus] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputvalue, setInputValue] = useState('');
  const [inputvalued, setInputValued] = useState('');
  const [textFieldValue, setTextFieldValue] = useState('');
  const navigate = useNavigate();

  
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email or Password is required!');
      setSuccess('');
    } else if (email === 'admin' && password === 'admin') {
      setIsAdmin(true)

      console.log('admin login!!::::::::::: ' + isAdmin)

      setError('');
      setSuccess('Login Successful!');

      console.log("USER LOGIN!");
      console.log('Email Address:::::::: ', email);
      console.log('Password::::::: ', password);

      // setTimeout(() => {
      //   navigate("/Messageboard", {state: { isAdmin: true}});
      //   console.log('mean: ', isAdmin);
      // }, 1500);
    } else if (email.includes('@') && email.includes('.')) {
      setIsAdmin(false);

      setError('try again');
      setError('');
      setSuccess('Login Successful!');

      console.log("USER LOGIN!");
      console.log('Email Address:::::::: ', email);
      console.log('Password::::::: ', password);

      setTimeout(() => {
        navigate("/Messageboard", { state: { isAdmin: false } });

        console.log(isAdmin);
      }, 1500);
    } else {
      setError('invalid crediential')
    }
  };

  const createAccount = () => {
    navigate("/signup");
  };

  const switchlog = () => {
    navigate("/Login");
    console.log('SWITCHING LOG BACKGROUND')

  };
  const resetpassword = () => {
    navigate('/Signup');
  };


  return (
    <div className="App bg-blue-50 min-h-screen">
      {success && <p className="text-green-600 text-center">{success}</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      <div className="flex items-center justify-center ">
        <p className="text-xl text-center font-mono text-blue-950 mt-1">
          Welcome Back
        </p>
      </div> 
      <div className="flex items-center justify-center pt-3 py-15 md:pt-0  md:min-h-screen">
        <form onSubmit={handleLogin} className="grid grid-flow-row px-5 py-6  w-96 rounded-xl shadow-2xl mx-10 bg-white">

          <div className="grid grid-flow-row ">
            <label htmlFor="email" content='inline' >Email Address</label>
            <input
              name="email"
              value={email}
              required
              placeholder="Email address"
              className={`outline-none p-1.5 rounded-md border border-gray-300 focus:ring-0 
                ${isFocus ? "border-blue-600" : "border-gray-400"}`}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(inputvalue !== "")}
              
            />

          </div>

          <div className="grid grid-flow-row my-1 ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              required
              placeholder="Password"
              className={`outline-none p-1.5 rounded-md border border-gray-300 focus:ring-0 
                ${isFocused ? "border-blue-600" : "border-gray-400"}`}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(inputvalued !== "")}
            />
          </div>

          <div className="grid grid-flow-row ">
            <button type='submit' className="bg-gray-300 min-w-full text-white mt-3  px-10 py-2 rounded-md">
              Sign in
            </button>

          </div>
          <button onClick={resetpassword} className="bg-white min-w-full text-gray-400 mt-3 px-10 py-2 rounded-md border border-gray-300">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
