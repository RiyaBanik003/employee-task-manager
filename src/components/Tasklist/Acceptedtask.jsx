import React,{useContext} from 'react';
import { AuthContext } from '../../context/Authorisation';

const Acceptedtask = () => {
   const [userData, setUserData] = useContext(AuthContext);
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      const employeeData = userData ? userData.find(e => e.email === loggedInUser?.email) : null;
  return (
    <div>
      <div className="flex-shrink-0 h-[50%] w-full bg-yellow-200 text-gray-900 shadow-lg rounded-xl flex flex-col items-center justify-between p-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 truncate w-full text-center">
          {employeeData.tasks[1].task_title}
        </h2>
        <h1 className='text-lg font-serif mt-2' >{employeeData.tasks[1].task_description}</h1>
        <div className="flex gap-4">
          <button className="bg-emerald-500 text-white py-1 px-4 rounded-lg text-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all">
            Mark as Completed
          </button>
          <button className="bg-red-500 text-white py-1 px-4 rounded-lg text-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all">
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Acceptedtask;
