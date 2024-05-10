import "../src/css/style.css";
import logo from "../src/img/edusaf1.png";
import new_login from "../src/new_login.js"
function App() {
  return (
    <div className="App bg-gray-100">
      {/* <header className="App-header"></header> */}
      <div className="flex items-center justify-center pt-24 md:pt-0  md:min-h-screen  ">
        <form className="grid grid-flow-row px-5 py-14  w-96 rounded-xl shadow-2xl mx-10 bg-white">
          <div className="grid items-center justify-center">
            <img className="w-20" src={logo} alt="" srcset="" />
          </div>
          <p className="text-xs text-center py-2 font-medium text-blue-950 mt-3 italic">
            Empowering Education, Simplifying Administration
          </p>
          <div className="">
            <p className="text-2xl my-5 capitalize">sign in</p>
          </div>
          <div className="grid grid-flow-row ">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="outline-none p-1.5 rounded-md border border-gray-300"
            />
          </div>

          <div className="grid grid-flow-row my-3 ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="password"
              className="outline-none p-1.5 rounded-md border border-gray-300"
            />
          </div>

          <div className="grid justify-center items-center">
            <button onClick={new_login} className="bg-blue-950 min-w-full text-white mt-5  px-10 py-1 rounded-md shadow-xl">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
