import React from 'react'
import { useToast } from '../../context/ToastContext'

export const NewTask = ({ data, employeeId, onAccept }) => {
  const toast = useToast();

  const handleAccept = () => {
    if (onAccept) {
      onAccept(employeeId, data.title);
      toast.success(`Task "${data.title}" accepted!`);
    }
  };

  return (
    <div className='shrink-0 h-full w-full sm:w-90 p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-blue-500/20'>
      <div className='flex justify-between items-center mb-4'>
        <span className='bg-blue-900/50 border border-blue-400/30 text-xs font-bold px-3 py-1 rounded-full text-blue-100'>{data.category}</span>
        <span className='text-xs text-blue-100 font-medium'>{data.date}</span>
      </div>
      
      <h2 className='text-2xl font-bold text-white mb-2'>{data.title}</h2>
      <p className='text-sm text-blue-100 mb-6 leading-relaxed opacity-90'>
        {data.description}
      </p>
      
      <div className='mt-auto'>
        <button 
          onClick={handleAccept}
          className='w-full px-4 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-sm font-semibold text-white shadow-md transition-all duration-200'
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}
