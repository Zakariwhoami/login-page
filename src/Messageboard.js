import "../src/css/style.css"
import { BrowserRouter, Router, Routes, Route, useNavigate } from "react-router-dom";
import logo2 from "./img/ITN.png";

function Messageboard() {
    const navigate = useNavigate();

    const switchone = () => {
        console.log('USER CONTINUE');
        navigate("./Dashboard");
    };

    const switchtwo = () => {

        console.log('USER LOGOUT!');
        navigate("../")
    }
    return(
        <div className="Messageboard bg-gray-100">
            <div className="flex items-center justify-center pt-24 md:pt-0 md:min-h-screen ">
                <form className="grid grid-flow-row items-center justify-center px-5 py-14  w-96 rounded-xl shadow-2xl mx-10 bg-white">
                    <img className="avatar flex w-20" src={logo2} alt="" srcSet="" />
                    <p className="text-center my-2">
                        You Have Successifully login
                    </p>
                    <div className="grid grid-flow-col">
                        <button onClick={switchone} className="bg-blue-500 rounded-md text-white mx-2 hover:text-blue-400 hover:bg-white shadow-md">Continue</button>
                        <button onClick={switchtwo} className="bg-red-400 rounded-md text-white mx-2 hover:text-red-400 hover:bg-white shadow-md">LogOut</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Messageboard;