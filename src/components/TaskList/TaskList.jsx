import React from 'react'
import AcceptDashboard from './AcceptDashboard'
import { NewTask } from './NewTask'
import CompleteTaskList from './CompleteTaskList'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
        <div
            id='tasklist'
            className='w-full mt-10 flex flex-col gap-4 sm:gap-5 sm:h-[55%] sm:flex-row sm:flex-nowrap sm:items-stretch sm:justify-start sm:overflow-x-auto py-5'
        >
            {data.tasks.map((elem,idx)=>{
                if(elem.active){
                    return <AcceptDashboard key={idx} data={elem}/>
                }
                if(elem.newTask){
                    return <NewTask key={idx} data={elem}/>
                }
                if(elem.completed){
                    return <CompleteTaskList key={idx} data={elem}/>
                }
                if(elem.failed){
                    return <FailedTask key={idx} data={elem}/>
                }
            })}
    </div>
  )
}

export default TaskList