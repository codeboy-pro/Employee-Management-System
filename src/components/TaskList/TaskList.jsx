import React from 'react'
import AcceptDashboard from './AcceptDashboard'
import { NewTask } from './NewTask'
import CompleteTaskList from './CompleteTaskList'
import FailedTask from './FailedTask'

const TaskList = ({ data, employeeId, onAccept, onComplete, onFail, onDelete }) => {
  if (!data || !data.tasks || data.tasks.length === 0) {
    return (
      <div className='w-full mt-10 flex items-center justify-center py-10'>
        <p className='text-gray-400 text-lg'>No tasks assigned yet</p>
      </div>
    );
  }

  return (
    <div
      id='tasklist'
      className='w-full mt-10 flex flex-col gap-4 sm:gap-5 sm:h-[55%] sm:flex-row sm:flex-nowrap sm:items-stretch sm:justify-start sm:overflow-x-auto py-5'
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return (
            <AcceptDashboard 
              key={idx} 
              data={elem} 
              employeeId={employeeId}
              onComplete={onComplete}
              onFail={onFail}
            />
          )
        }
        if (elem.newTask) {
          return (
            <NewTask 
              key={idx} 
              data={elem} 
              employeeId={employeeId}
              onAccept={onAccept}
            />
          )
        }
        if (elem.completed) {
          return (
            <CompleteTaskList 
              key={idx} 
              data={elem} 
              employeeId={employeeId}
              onDelete={onDelete}
            />
          )
        }
        if (elem.failed) {
          return (
            <FailedTask 
              key={idx} 
              data={elem} 
              employeeId={employeeId}
              onDelete={onDelete}
            />
          )
        }
        return null;
      })}
    </div>
  )
}

export default TaskList