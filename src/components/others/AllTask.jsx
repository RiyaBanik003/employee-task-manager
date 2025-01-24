import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authorisation';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <>
      <div className='w-full h-20 bg-black'>
        <div className='py-2 px-4 bg-red-300 font-bold rounded-lg h-12 flex justify-between'>
          <h2>Employee Name</h2>
          <h3>Active Tasks</h3>
          <h4>Completed Task</h4>
          <h3>Failed Task</h3>
          <h3>New Task</h3>
        </div>
      </div>
      <div className='bg-[#1c1c1c]  h-64 overflow-auto'>
        {userData.map((e, idx) => {
          return (
            <div key={idx} className='py-2 px-4 border-emerald-600 rounded-lg mt-5 h-12 flex justify-between'>
              <h2 className='text-white font-extrabold'>{e.name}</h2>
              <h3  className='text-yellow-400 font-extrabold'>{e.taskCounts.active}</h3>
              <h4  className='text-green-400 font-extrabold'>{e.taskCounts.completed}</h4>
              <h3  className='text-red-400 font-extrabold'>{e.taskCounts.failed}</h3>
              <h3  className='text-blue-400 font-extrabold'>{e.taskCounts.new_task}</h3>
            </div>
          );
        })}
      </div></>

  )
}

export default AllTask