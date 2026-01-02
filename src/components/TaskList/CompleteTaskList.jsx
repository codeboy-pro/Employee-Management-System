import React from 'react'
import { useToast } from '../../context/ToastContext'
import { useConfirmDialog } from '../../context/ConfirmDialogContext'

const CompleteTaskList = ({ data, employeeId, onDelete }) => {
  const toast = useToast();
  const { confirm } = useConfirmDialog();

  const handleDelete = async () => {
    const confirmed = await confirm({
      title: 'Delete Task',
      message: `Are you sure you want to delete "${data.title}"? This action cannot be undone.`,
      confirmText: 'Yes, Delete',
      cancelText: 'Cancel',
      type: 'danger',
    });

    if (confirmed && onDelete) {
      onDelete(employeeId, data.title);
      toast.info(`Task "${data.title}" deleted`);
    }
  };

  return (
    <div className='shrink-0 h-full w-full sm:w-90 p-6 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 border border-emerald-500/20'>
      <div className='flex justify-between items-center mb-4'>
        <span className='bg-emerald-900/50 border border-emerald-400/30 text-xs font-bold px-3 py-1 rounded-full text-emerald-100'>{data.category}</span>
        <span className='text-xs text-emerald-100 font-medium'>{data.date}</span>
      </div>
      
      <h2 className='text-2xl font-bold text-white mb-2'>{data.title}</h2>
      <p className='text-sm text-emerald-100 mb-6 leading-relaxed opacity-90'>
        {data.description}
      </p>
      
      <div className='flex flex-col sm:flex-row gap-3 mt-auto'>
        <div className='flex-1 px-4 py-2.5 w-full rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-sm font-semibold text-emerald-100 text-center'>
          ✓ Completed
        </div>
        {onDelete && (
          <button 
            onClick={handleDelete}
            className='flex-1 px-4 py-2.5 rounded-lg bg-rose-500 hover:bg-rose-400 text-sm font-semibold text-white shadow-md transition-all duration-200'
          >
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default CompleteTaskList