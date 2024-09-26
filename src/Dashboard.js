import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import "../src/css/style.css";
import logo from "../src/img/edusaf1.png";
import logo2 from "../src/img/ITN.png";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const [household_id, setHousehold_id] = useState('');
  const [household_head_name, setHousehold_head_name] = useState('');
  const [number_of_family_members, setNumber_of_family_members] = useState('');
  const [itns_distributed, setITNs_distributed] = useState('');
  const [distribution_date, setDistribution_date] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdmin } = location.state || {}
  const { emailadmin } = location.state || {}

  const handleLogin = (e) => {
    e.preventDefault();
    if (!household_id || !household_head_name || !number_of_family_members || !itns_distributed || !distribution_date) {
      setError('Please Fill The Requirement!');
      setSuccess('');
    } else {
      setSuccess('you have Successful Submit');
      setError('');

      console.log('USER SUBMIT APPLICATION!');
      console.log('');
      console.log('::::::::::APPLICATION:::::::::');
      console.log('Household ID::::::: ', household_id);
      console.log('House Head Name::::::: ', household_head_name);
      console.log('Number Of Family Member::::::: ', number_of_family_members);
      console.log('ITNs Distributed::::::: ', itns_distributed);
      console.log('Distributed Date::::::: ', distribution_date);
      console.log('::::::::::::::::::::::::::::::');

    };

    setTimeout(() => {
      navigate("./Submit")
    }, 1500);

  }

  return (
    <div className="Dashboard bg-gray-100">
      {error && <p className="text-red-600 text-center">{error}</p>}
      {success && <p className="text-green-600 text-center ">{success}</p>}
      <div className="flex items-center justify-center pt-24 md:pt-0 md:min-h-screen  ">
        <form onSubmit={handleLogin} action="" className="grid grid-flow-row px-5 py-10  w-96 rounded-xl shadow-2xl mx-10 bg-white">
          <div className="grid items-center justify-center">
            <img src={logo2} alt="" className="w-20" />
          </div>
          <p className="text-xl text-center py-2 font-bold text-blue-500 capitalize">ITN Distribution Application</p>
          {/* <div className="grid grid-flow-row items-center justify-center my-2 ">
            
          </div> */}
          <div className="">
            {isAdmin &&
              (<div className="">
                
                <button className="bg-blue-500 hover:bg-blue-800 text-white px-10 py-1 items-center justify-center">
                  ADMIN VIEW
                </button>
              </div>)}
            {!isAdmin && (<div className="">
              <p className="text-blue-500 text-center">
                proceed
              </p>
              </div>)}

          </div>
          <div className="grid grid-flow-row gap-4">
            <div className="grid grid-flow-row ">
              <label htmlFor="id">HouseHold ID</label>
              <input
                type="id"
                name="household_id"
                value={household_id}
                required
                placeholder="Household ID"
                className="outline-none p-1.5 rounded-md border border-gray-300"
                onChange={(e) => setHousehold_id(e.target.value)}
              />
            </div>
            <div className="grid grid-flow-row">
              <label htmlFor="name">HouseHold Head Name</label>
              <input
                type="name"
                name="household_Head_Name"
                value={household_head_name}
                required
                placeholder="HouseHold Head Name"
                className="outline-none p-1.5 rounded-md border border-gray-300"
                onChange={(e) => setHousehold_head_name(e.target.value)}
              />
            </div>
            <div className="grid grid-flow-row">
              <label htmlFor="number">Number of Family Members</label>
              <input
                type="number"
                name="number_of_Family_Members"
                value={number_of_family_members}
                required
                placeholder="Number of Family Members"
                className="outline-none p-1.5 rounded-md border border-gray-300"
                onChange={(e) => setNumber_of_family_members(e.target.value)}
              />
            </div>
            <div className="grid grid-flow-row">
              <label htmlFor="quantity">ITNs Distributed (quantity)</label>
              <input
                type="quantity"
                name="itns_distributed"
                value={itns_distributed}
                required
                placeholder="itns distributed"
                className="outline-none p-1.5 rounded-md border border-gray-300"
                onChange={(e) => setITNs_distributed(e.target.value)}
              />
            </div>
            <div className="grid grid-flow-row">
              <label htmlFor="date">Distribution Date</label>
              <input
                type="date"
                name="distribution_date"
                value={distribution_date}
                required
                placeholder="Distribution Date"
                className="outline-none p-1.5 rounded-md border border-gray-300"
                onChange={(e) => setDistribution_date(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-flow-row mt-5">
            <button type="submit" className="bg-blue-950 my-2 text-white mt-5 hover:bg-blue-400 hover:text-white py-1 rounded-md shadow-xl ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
