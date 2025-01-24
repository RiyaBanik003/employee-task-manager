import React, {useContext} from 'react'
import { AuthContext } from '../../context/Authorisation';

const Tasknumber=()=> {
  const [userData, setUserData] = useContext(AuthContext);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const employeeData = userData ? userData.find(e => e.email === loggedInUser?.email) : null;
  console.log(employeeData.taskCounts.new_task)
    return (
        <div className="h-[20%] whitespace-nowrap rounded-xl ml-5 mt-10 flex gap-4 pr-20 bg-rgb(28 28 28)">
  <div className="bg-blue-500 w-[30%] text-white p-6 rounded-lg shadow-md">
    <h1 className="text-4xl font-bold">{employeeData.taskCounts.new_task}</h1>
    <p className="text-xl">New Tasks</p>
  </div>
  <div className="bg-emerald-400 w-[30%] text-white p-6 rounded-lg shadow-md">
    <h1 className="text-4xl font-bold">{employeeData.taskCounts.completed}</h1>
    <p className="text-xl">Completed Tasks</p>
  </div>
  <div className="bg-yellow-200 w-[30%] text-gray-800 p-6 rounded-lg shadow-md">
    <h1 className="text-4xl font-bold">{employeeData.taskCounts.active}</h1>
    <p className="text-xl">Active Tasks</p>
  </div>
  <div className="bg-red-400 text-white w-[30%] p-6 rounded-lg shadow-md">
    <h1 className="text-4xl font-bold">{employeeData.taskCounts.failed}</h1>
    <p className="text-xl">Failed Tasks</p>
  </div>
</div>

    )
}

export default Tasknumber