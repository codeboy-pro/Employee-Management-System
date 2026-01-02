import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
export const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen bg-[#1C1C1C] px-4 py-6 sm:px-10 sm:py-10'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}