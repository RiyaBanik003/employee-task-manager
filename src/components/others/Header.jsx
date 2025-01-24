import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/Authorisation';

const Header = (props) => {
  const [userData, setUserData] = useContext(AuthContext);
  
 
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const employeeData = userData ? userData.find(e => e.email === loggedInUser?.email) : null;
  
  const employeeName = employeeData ? employeeData.name : 'Alisha'; 

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
  
    props.changeUser('');
  };

  return (
    <div className="flex items-end justify-between p-7 bg-[#1c1c1c] w-full">
      <h1 className="text-2xl font-medium text-white pl-5">
        Hello <br />
        <span className="text-3xl font-semibold text-white">{employeeName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base  font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
