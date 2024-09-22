import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import "../src/css/style.css";
import logo from "../src/img/edusaf1.png";
import logo2 from "../src/img/DEVS.png";
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Dashboard');
  };

  const createAccount = () => {
    navigate("./Signup")
  }

  return (
    <div className="App bg-gray-100">
      {/* <header className="App-header"></header> */}
      <div className="flex items-center justify-center pt-24 md:pt-0  md:min-h-screen  ">
        <form className="grid grid-flow-row px-5 py-14  w-96 rounded-xl shadow-2xl mx-10 bg-white">
          <div className="grid items-center justify-center">
            <img className="w-20" src={logo2} alt="" srcset="" />
          </div>
          <p className="text-xs text-center py-2 font-medium text-blue-950 mt-3 italic">
            Devs
          </p>
          <div className="">
            <p className="text-2xl my-5 capitalize">sign in</p>
          </div>
          <div className="grid grid-flow-row ">
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
          
          <div className="grid justify-center items-center">
            <button onClick={handleLogin} className="bg-blue-950 min-w-full text-white mt-5  px-10 py-1 rounded-md shadow-xl">
              Sign in
            </button>
            <p className="hover:cursor-pointer">
              I Don't Have Account,
              <span className="text-blue-600 hover:text-green-300 underline cursor-pointer" onClick={createAccount}>
                 create Account
              </span>
              </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
