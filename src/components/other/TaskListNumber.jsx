import React from 'react'

const TaskListNumber = ({data}) => {
  if (!data || !data.taskStats) {
    return (
      <div className='grid grid-cols-2 lg:grid-cols-4 mt-6 sm:mt-10 gap-3 sm:gap-4 lg:gap-5'>
        {[1,2,3,4].map((i) => (
          <div key={i} className='rounded-xl py-4 sm:py-6 px-4 sm:px-6 lg:px-9 bg-slate-800 animate-pulse h-24 sm:h-28 border border-slate-700' />
        ))}
      </div>
    );
  }

  const stats = [
    { 
      count: data.taskStats.newTask, 
      label: 'New Task', 
      bg: 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/20',
      icon: '📋'
    },
    { 
      count: data.taskStats.active, 
      label: 'Active Task', 
      bg: 'bg-gradient-to-br from-amber-500 to-amber-600 shadow-amber-500/20',
      icon: '⚡'
    },
    { 
      count: data.taskStats.completed, 
      label: 'Completed', 
      bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-emerald-500/20',
      icon: '✅'
    },
    { 
      count: data.taskStats.failed, 
      label: 'Failed', 
      bg: 'bg-gradient-to-br from-rose-500 to-rose-600 shadow-rose-500/20',
      icon: '❌'
    },
  ];

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 mt-6 sm:mt-10 gap-3 sm:gap-4 lg:gap-5'>
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`rounded-xl py-4 sm:py-6 px-4 sm:px-6 lg:px-9 ${stat.bg} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/10`}
        >
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>{stat.count}</h2>
              <h3 className='text-xs sm:text-sm lg:text-base font-medium text-white/90 mt-1'>{stat.label}</h3>
            </div>
            <span className='text-2xl sm:text-3xl lg:text-4xl opacity-80 hidden sm:block'>{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumber