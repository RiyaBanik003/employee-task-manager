import React, { useContext, useState, useEffect } from 'react';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Login from './components/Authorisation/Login';
import Admin from './components/Dashboard/Admin';
import { AuthContext } from './context/Authorisation';
import { getLocalStorage } from './utilities/Localhost';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', email }));
    } else if (userData) {
      const emp = userData.find((e) => e.email === email && e.password === password);
      if (emp) {
        setUser('employee');
        setLoggedInUserData(emp);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email }));
      }
    } else {
      alert('Invalid Credentials');
    }
  };
  useEffect(() => {
    
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser) 
        setUser(userData.role)
      setLoggedInUserData(userData.data)
      }
    
  }, []);

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <Admin changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
