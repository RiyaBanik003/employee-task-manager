import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utilities/Localhost'
export const AuthContext=createContext()
const Authorisation = ({children}) => {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    setLocalStorage();
    const {employee}= getLocalStorage();
  setUserData(employee)
  }, [])
  
  
  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
        
    </div>
  )
}

export default Authorisation;