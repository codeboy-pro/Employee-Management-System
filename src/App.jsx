import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setSecureItem, getSecureItem, removeSecureItem } from './utils/secureStorage'
import { getLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null); 
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData, loading } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = getSecureItem('loggedInUser');
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data);
    } 
  }, []);

  const handleLogin = (email, password) => {
    // Get admin credentials from secure storage
    const { admin } = getLocalStorage();
    const adminUser = admin?.[0];
    
    if (adminUser && email === adminUser.email && password === adminUser.password) {
      setUser('admin');
      setSecureItem('loggedInUser', { role: 'admin' });
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        setSecureItem('loggedInUser', { role: 'employee', data: employee });
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // Show loading state while context is initializing
  if (loading) {
    return (
      <div className='min-h-screen bg-[#1C1C1C] flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4'></div>
          <p className='text-gray-400'>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin}/>
      ) : (
        user === 'admin' ? (
          <AdminDashboard changeUser={setUser}/>
        ) : (
          loggedInUserData && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
        )
      )}
    </>
  )
}

export default App