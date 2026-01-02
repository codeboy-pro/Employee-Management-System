import React from 'react'
import { useToast } from '../../context/ToastContext'
import { useConfirmDialog } from '../../context/ConfirmDialogContext'

const AcceptDashboard = ({ data, employeeId, onComplete, onFail }) => {
  const toast = useToast();
  const { confirm } = useConfirmDialog();

  const handleComplete = () => {
    if (onComplete) {
      onComplete(employeeId, data.title);
      toast.success(`Task "${data.title}" marked as completed!`);
    }
  };

  const handleFail = async () => {
    const confirmed = await confirm({
      title: 'Mark as Failed',
      message: `Are you sure you want to mark "${data.title}" as failed? This action cannot be undone.`,
      confirmText: 'Yes, Mark as Failed',
      cancelText: 'Cancel',
      type: 'danger',
    });

    if (confirmed && onFail) {
      onFail(employeeId, data.title);
      toast.warning(`Task "${data.title}" marked as failed`);
    }
  };

  return (
    <div className='shrink-0 h-full w-full sm:w-90 p-6 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl shadow-lg hover:shadow-amber-900/20 transition-all duration-300 border border-amber-500/20'>
      <div className='flex justify-between items-center mb-4'>
        <span className='bg-amber-900/50 border border-amber-400/30 text-xs font-bold px-3 py-1 rounded-full text-amber-100'>{data.category}</span>
        <span className='text-xs text-amber-100 font-medium'>{data.date}</span>
      </div>
      
      <h2 className='text-2xl font-bold text-white mb-2'>{data.title}</h2>
      <p className='text-sm text-amber-100 mb-6 leading-relaxed opacity-90'>
        {data.description}
      </p>
      
      <div className='flex flex-col sm:flex-row gap-3 mt-auto'>
        <button 
          onClick={handleComplete}
          className='flex-1 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-sm font-semibold text-white shadow-md transition-all duration-200'
        >
          Mark Completed
        </button>
        <button 
          onClick={handleFail}
          className='flex-1 px-4 py-2.5 rounded-lg bg-rose-500 hover:bg-rose-400 text-sm font-semibold text-white shadow-md transition-all duration-200'
        >
          Mark Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptDashboard