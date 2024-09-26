import "../src/css/style.css";
import { BrowserRouter, Router, Routes, Route, useNavigate } from "react-router-dom";
import logo2 from "./img/ITN.png";

function Submit() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("./../../../../");
        console.log('USER LOGOUT!');
    };

    return (
        <div className="Submit bg-gray-100">
            <div className="flex items-center justify-center pt-24 md:pt-0 md:min-h-screen">
                <form action="" className="grid grid-flow-row px-5 py-14  w-96 rounded-xl shadow-2xl mx-10 bg-white">
                    <p className="font-extrabold text-center text-blue-600">YOU HAVE SUCCESSFUL SUBMIT</p>
                    <div className="flex items-center justify-center">
                        <button onClick={handleLogin} className="text-white bg-red-500 mx-2 font-bold px-7 py-0 mt-3 hover:bg-white hover:text-red-500 rounded-md">
                            LogOut
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Submit;