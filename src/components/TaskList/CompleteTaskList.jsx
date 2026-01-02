import React from 'react'

const CompleteTaskList = ({data}) => {
  return (
    <div className='shrink-0 h-full w-full sm:w-90 p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='flex justify-between items-center mb-4'>
                <span className='bg-red-700 text-xs font-bold px-3 py-1 rounded-full text-white'>{data.category}</span>
                <span className='text-xs text-red-100'>{DataTransfer.date}</span>
            </div>
            
            <h2 className='text-2xl font-bold text-white mb-2'>{data.title}</h2>
            <p className='text-sm text-red-100 mb-6 leading-relaxed'>
               {data.description}
            </p>
            
            <div className='flex flex-col sm:flex-row gap-3'>
                <button className='flex-1 px-4 py-2 w-full rounded-lg bg-red-500 hover:bg-red-600 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105'>
                    ✓ Completed
                </button>
        
          
            </div>
        </div>
  )
}

export default CompleteTaskList