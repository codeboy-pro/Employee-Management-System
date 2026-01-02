import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setuser] = useState(null); 
const [loggedInUSerData, setloggedInUSerData] = useState(null);
const [userdata,setuserdata]=useContext(AuthContext);


useEffect(() => {
  const loggedInUSer=localStorage.getItem('loggedInUSer');
if(loggedInUSer){
const userData=JSON.parse(loggedInUSer);
setuser(userData.role);
setloggedInUSerData(userData.data)

} 
},[]);


const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setuser('admin');
      localStorage.setItem('loggedInUSer', JSON.stringify({ role: 'admin' }));
    } else if (userdata) {
      const employee = userdata.find((e) => email == e.email && e.password == password);
      if (employee) {
        setuser('employee');
        setloggedInUSerData(employee);
        localStorage.setItem('loggedInUSer', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  }
 return (
  <>
    {!user ? (
      <Login handleLogin={handleLogin}/>
    ) : (
      user === 'admin' ? (
        <AdminDashboard changeUser={setuser}/>
      ) : (
        loggedInUSerData && <EmployeeDashboard changeUser={setuser} data={loggedInUSerData} />
      )
    )}
  </>
)
}

export default App