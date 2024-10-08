import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import "../src/css/style.css";
import logo from "../src/img/edusaf1.png";
import logo2 from "../src/img/ITN.png";
import { useState } from 'react';
import { useEffect } from 'react';
 
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAdmin, setIsAdmin] = useState();
  const [emailadmin, setEmailadmin] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>:::: ',isAdmin)
  },[isAdmin,setIsAdmin])

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email or Password is required!');
      setSuccess('');
    } else if (email === 'admin' && password === 'admin') {
      setIsAdmin(true)

      console.log('admin login!!::::::::::: '+isAdmin)

      setError('');
      setSuccess('Login Successful!');

      console.log("USER LOGIN!");
      console.log('Email Address:::::::: ', email);
      console.log('Password::::::: ', password);

      // setTimeout(() => {
      //   navigate("/Messageboard", {state: { isAdmin: true}});
      //   console.log('mean: ', isAdmin);
      // }, 1500);
    } else if (email.includes('@') && email.includes('.')){
      setIsAdmin(false);

      setError('try again');
      setError('');
      setSuccess('Login Successful!');

      console.log("USER LOGIN!");
      console.log('Email Address:::::::: ', email);
      console.log('Password::::::: ', password);

      setTimeout(() => {
        navigate("/Messageboard", { state: { isAdmin: false}});

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
    console.log('SWITCHING LOG BACKGROUND');
    setError('SWITCHING LOG BACKGROUND');
    
  };


  return (
    <div className="App bg-gray-100">
      {success && <p className="text-green-600 text-center">{success}</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}
      
      <div className="flex items-center justify-center pt-24 md:pt-0  md:min-h-screen  ">
        <form onSubmit={handleLogin} className="grid grid-flow-row px-5 py-14  w-96 rounded-xl shadow-2xl mx-10 bg-white">
          {/* <div className="">
            {view && <div className="">
              {view}
            </div>}
          </div> */}
          <div className="grid items-center justify-center">
            <img className="w-20" src={logo2} alt="" />
          </div>
          <p className="text-xs text-center py-2 font-medium text-blue-950 mt-3 italic">
            ITN distribution data
          </p>
          <div className="">
            <p className="text-2xl my-5 capitalize">Sign in</p>
          </div>
          <div className="grid grid-flow-row ">
            <label htmlFor="email">Email Address</label>
            <input
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
              placeholder="Password"
              className="outline-none p-1.5 rounded-md border border-gray-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="grid grid-flow-row justify-center items-center">
            <button type='submit' className="bg-blue-950 min-w-full text-white mt-5  px-10 py-1 rounded-md shadow-xl">
              Sign in
            </button>
            <p className="my-2 text-xs hover:cursor-pointer">
              I Don't Have an Account <span onSubmit={createAccount} className="text-blue-600 items-center mt-2 justify-center hover:text-blue-900 underline cursor-pointer" onClick={createAccount}>
                Create Account
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center mx-2 my-3 ">
            <button onClick={switchlog} className="hover:bg-red-300 py-1 px-10 rounded-md  bg-white text-red-600">SWITCH</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
