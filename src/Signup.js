import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import "../src/css/style.css";
import logo2 from "../src/img/ITN.png";
import { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const createAccount = (e) => {
    e.preventDefault();

    if (!email || !name || !password) {
      setError('Name, Email or Password is required!');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Signup Successful');

      setTimeout(() => {
        navigate("../");
      }, 1500);

    }
  };

  const HaveAccount = () => {
    navigate("../");
  };

  return (
    <div className="App bg-gray-100">
      {error && <p className="text-red-600 text-center ">{error}</p>}
      {success && <p className="text-green-600 text-center ">{success}</p>}

      <div className="flex items-center justify-center pt-24 md:pt-0  md:min-h-screen  ">
        <form onSubmit={createAccount} className="grid grid-flow-row px-5 py-14  w-96 rounded-xl shadow-2xl mx-10 bg-white">
          <div className="grid items-center justify-center">
            <img className="w-20" src={logo2} alt="" srcset="" />
          </div>
          <p className="text-xs text-center py-2 font-medium text-blue-950 mt-3 italic">
            ITN distribution data
          </p>
          <div className="">
            <p className="text-2xl my-5 capitalize">sign up</p>
          </div>
          <div className="grid grid-flow-row ">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              value={name}
              required
              placeholder="Full Name"
              className="outline-none p-1.5 rounded-md border border-gray-300"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid grid-flow-row mt-3">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Email address"
              className="outline-none p-1.5 rounded-md border border-gray-300"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid grid-flow-row my-3 ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              required
              placeholder="password"
              className="outline-none p-1.5 rounded-md border border-gray-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="grid grid-flow-row justify-center items-center">
            <button type='submit' className="bg-blue-950 min-w-full text-white mt-5  px-10 py-1 rounded-md shadow-xl">
              Sign Up
            </button>
          </div>
          <div className="grid grid-flow-row justify-center items-center">
            <p className="my-2 text-xs hover:cursor-pointer">
              I Already Have Account <span onClick={HaveAccount} className="text-blue-600 items-center justify-center hover:text-blue-900 underline cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
