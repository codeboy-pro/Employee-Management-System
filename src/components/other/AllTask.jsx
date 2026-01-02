import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userdata,setuserdata]=useContext(AuthContext);


  return (


//     </div>
<div className="bg-[#111111] p-6 rounded-xl mt-6 border border-white/10 shadow-xl h-[50%]">
  {/* Header */}
  <div className="mb-3 py-3 px-4 flex justify-between rounded-lg bg-white/10 text-gray-200 font-semibold text-sm tracking-wide border border-white/10 sticky top-0">
    <h2 className="w-1/5">Employee</h2>
    <h3 className="w-1/5 ">New Task</h3>
    <h5 className="w-1/5">Active</h5>
    <h5 className="w-1/5">Completed</h5>
    <h5 className="w-1/5">Failed</h5>
  </div>

  {/* Body */}
  <div className="h-[80%] overflow-auto space-y-2">
    {userdata.map((elem, i) => (
      <div
  key={i}
  className="py-3 px-4 flex justify-between rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
>
  <h2 className="w-1/5 truncate text-gray-200">{elem.firstName}</h2>

  <h3 className="w-1/5 font-semibold text-blue-400">{elem?.taskStats?.newTask }</h3>
  <h5 className="w-1/5 font-semibold text-yellow-400">{elem?.taskStats?.active }</h5>
  <h5 className="w-1/5 font-semibold text-green-400">{elem?.taskStats?.completed }</h5>
  <h5 className="w-1/5 font-semibold text-red-400">{elem?.taskStats?.failed }</h5>
</div>

    ))}
  </div>
</div>

  )
}

export default AllTask

