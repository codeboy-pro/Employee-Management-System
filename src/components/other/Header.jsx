import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
// const [USername, setUSername] = useState('');
// if(!data){
//   setUSername('Admin');
// }else{
//   setUSername(data.firstName);
// }

const LogoutUser=()=>{
  localStorage.setItem('loggedInUser','');
  props.changeUser('');
  // window.location.reload();
}
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
       {/* <h1 className='text-2xl font-medium sm:text-3xl'>Hello <br /> <span className='text-3xl font-semibold sm:text-4xl'>{USername} 👋</span></h1> */}
       <button onClick={LogoutUser} className='self-end  sm:self-auto bg-red-600 text-sm sm:text-base font-medium text-white px-4 py-2 sm:px-5 sm:py-2 rounded-sm cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header