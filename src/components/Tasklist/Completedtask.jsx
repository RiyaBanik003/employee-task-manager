import React,{useContext} from 'react'
import { AuthContext } from '../../context/Authorisation';

const Completedtask = () => {
   const [userData, setUserData] = useContext(AuthContext);
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const employeeData = userData ? userData.find(e => e.email === loggedInUser?.email) : null;
  return (
    <div>
    <div className="flex-shrink-0 h-[50%] w-full bg-emerald-400 text-gray-900 shadow-lg rounded-xl flex flex-col items-center justify-between p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 truncate w-full text-center">
        {employeeData.tasks[0].task_title}
      </h2>
      <h1 className='text-lg font-serif mt-2'>{employeeData.tasks[0].task_description}</h1>
      <div className="flex gap-4">
        
      </div>
    </div>
  </div>

  )
}

export default Completedtask