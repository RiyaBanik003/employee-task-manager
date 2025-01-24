import React, {useContext} from 'react';
import { AuthContext } from '../../context/Authorisation';
import Acceptedtask from './Acceptedtask';
import Newtask from './Newtask';
import Completedtask from './Completedtask';
import Failedtask from './Failedtask';

const Tasklist=() =>{
  const [userData, setUserData]= useContext(AuthContext)
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const employeeData = userData ? userData.find(e => e.email === loggedInUser?.email) : null;
  
  return (
    <div
      id="taskList"
      className="w-[98%] h-[90%] overflow-x-auto whitespace-nowrap rounded-xl ml-5 mt-20 flex gap-4"
    >
      {employeeData.tasks.map((e, id)=>{
        if(e.active){
          
          return <Acceptedtask key={id}/>
        }
      })}
      {employeeData.tasks.map((e, id)=>{
        if(e.new_task){
          return <Newtask key={id}/>
        }
      })}
       {employeeData.tasks.map((e, id)=>{
        if(e.completed){
          return <Completedtask key={id}/>
        }
      })}
       {employeeData.tasks.map((e, id)=>{
        if(e.failed){
          return <Failedtask key={id}/>
        }
      })}
     
    </div>
  );
}

export default Tasklist;
