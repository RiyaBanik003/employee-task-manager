import React, {useContext } from 'react'
import Header from '../others/Header'
import Tasknumber from '../others/Tasknumber'
import Tasklist from '../Tasklist/Tasklist'
import { AuthContext } from '../../context/Authorisation'

const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} userData={props.userData} />
      <Tasknumber userData={props.userData}/>
      <Tasklist userData={props.userData}/>
    </div>
  )
}

export default EmployeeDashboard