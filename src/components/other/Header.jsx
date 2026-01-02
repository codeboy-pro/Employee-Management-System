import React from 'react'
import { removeSecureItem } from '../../utils/secureStorage'

const Header = ({ data, changeUser }) => {
  // Determine username based on whether data exists
  const username = data ? data.firstName : 'Admin';

  const LogoutUser = () => {
    removeSecureItem('loggedInUser');
    changeUser('');
    window.location.reload();
  }
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8'>
       <div>
         <h1 className='text-lg font-medium text-slate-400'>Hello,</h1>
         <span className='text-3xl font-bold text-slate-100'>{username} 👋</span>
       </div>
       <button onClick={LogoutUser} className='self-end sm:self-auto bg-rose-500 hover:bg-rose-600 text-sm sm:text-base font-medium text-white px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40'>Log Out</button>
    </div>
  )
}

export default Header