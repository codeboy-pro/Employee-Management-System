import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const { userData, loading, error } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="bg-slate-900 p-4 sm:p-6 rounded-xl mt-6 border border-slate-800 shadow-xl min-h-[300px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mx-auto mb-3"></div>
          <p className="text-slate-400 text-sm sm:text-base">Loading employees...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-900 p-4 sm:p-6 rounded-xl mt-6 border border-slate-800 shadow-xl min-h-[200px] flex items-center justify-center">
        <p className="text-rose-400 text-sm sm:text-base">{error}</p>
      </div>
    );
  }

  if (!userData || userData.length === 0) {
    return (
      <div className="bg-slate-900 p-4 sm:p-6 rounded-xl mt-6 border border-slate-800 shadow-xl min-h-[200px] flex items-center justify-center">
        <p className="text-slate-400 text-sm sm:text-base">No employees found</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 p-4 sm:p-6 rounded-xl mt-6 border border-slate-800 shadow-xl">
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">All Employees</h2>
      
      {/* Desktop Table View - Hidden on mobile */}
      <div className="hidden md:block">
        {/* Header */}
        <div className="mb-3 py-3 px-4 flex justify-between rounded-lg bg-slate-800 text-slate-300 font-semibold text-xs sm:text-sm tracking-wide border border-slate-700">
          <h2 className="w-1/5">Employee</h2>
          <h3 className="w-1/5 text-center">New</h3>
          <h5 className="w-1/5 text-center">Active</h5>
          <h5 className="w-1/5 text-center">Completed</h5>
          <h5 className="w-1/5 text-center">Failed</h5>
        </div>

        {/* Body */}
        <div className="max-h-[300px] overflow-auto space-y-2 pr-2 custom-scrollbar">
          {userData.map((elem) => (
            <div
              key={elem.id}
              className="py-3 px-4 flex justify-between items-center rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-all duration-300"
            >
              <h2 className="w-1/5 truncate text-slate-200 font-medium">{elem.firstName}</h2>
              <h3 className="w-1/5 font-semibold text-blue-400 text-center">{elem?.taskStats?.newTask}</h3>
              <h5 className="w-1/5 font-semibold text-amber-400 text-center">{elem?.taskStats?.active}</h5>
              <h5 className="w-1/5 font-semibold text-emerald-400 text-center">{elem?.taskStats?.completed}</h5>
              <h5 className="w-1/5 font-semibold text-rose-400 text-center">{elem?.taskStats?.failed}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Card View - Hidden on desktop */}
      <div className="md:hidden space-y-3 max-h-[400px] overflow-auto pr-2 custom-scrollbar">
        {userData.map((elem) => (
          <div
            key={elem.id}
            className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-all duration-300"
          >
            {/* Employee Name */}
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-700">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-500/20">
                {elem.firstName?.charAt(0).toUpperCase()}
              </div>
              <h2 className="text-slate-100 font-semibold">{elem.firstName}</h2>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg py-2 px-1">
                <p className="text-blue-400 font-bold text-lg">{elem?.taskStats?.newTask}</p>
                <p className="text-slate-400 text-xs">New</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg py-2 px-1">
                <p className="text-amber-400 font-bold text-lg">{elem?.taskStats?.active}</p>
                <p className="text-slate-400 text-xs">Active</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg py-2 px-1">
                <p className="text-emerald-400 font-bold text-lg">{elem?.taskStats?.completed}</p>
                <p className="text-slate-400 text-xs">Done</p>
              </div>
              <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg py-2 px-1">
                <p className="text-rose-400 font-bold text-lg">{elem?.taskStats?.failed}</p>
                <p className="text-slate-400 text-xs">Failed</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask

