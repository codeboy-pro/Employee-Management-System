import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

export const EmployeeDashboard = (props) => {
  const { 
    userData, 
    acceptTask, 
    completeTask, 
    failTask, 
    deleteTask,
    getEmployeeById,
    loading 
  } = useContext(AuthContext);

  // Get the current employee data from context (real-time updates)
  const currentEmployee = userData 
    ? userData.find((emp) => emp.id === props.data.id) 
    : props.data;

  if (loading) {
    return (
      <div className='min-h-screen bg-slate-950 px-4 py-6 sm:px-10 sm:py-10 flex items-center justify-center'>
        <p className='text-slate-400 text-lg'>Loading...</p>
      </div>
    );
  }

  if (!currentEmployee) {
    return (
      <div className='min-h-screen bg-slate-950 px-4 py-6 sm:px-10 sm:py-10 flex items-center justify-center'>
        <p className='text-slate-400 text-lg'>Employee data not found</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-slate-950 px-4 py-6 sm:px-10 sm:py-10'>
      <Header changeUser={props.changeUser} data={currentEmployee}/>
      <TaskListNumber data={currentEmployee}/>
      <TaskList 
        data={currentEmployee}
        employeeId={currentEmployee.id}
        onAccept={acceptTask}
        onComplete={completeTask}
        onFail={failTask}
        onDelete={deleteTask}
      />
    </div>
  )
}