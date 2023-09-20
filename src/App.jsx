import React, { useRef, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [currentTask, setCurrentTask] = useState('Demo')
  const addTask = (e)=>{
    e.preventDefault()
    setTasks([currentTask, ...tasks])
    setCurrentTask("")
  }
  const deleteTask = (i)=>{
    console.log(i)
    const tasksList = [...tasks]
    tasksList.splice(i, 1)
    console.log(tasksList)
    setTasks(tasksList)
  }
  return (
    <div className='md:w-2/5 mx-auto p-4'>
      <h1 className='title text-center text-5xl mb-5 font-bold'>ToDo App</h1>
      <form onSubmit={addTask} className='mb-5'>
        <input type='text' 
        className='w-full bg-gray-100 border-transparent focus:border-0 mb-5 rounded-md p-2 focus-visible:outline-none focus-visible:bg-gray-200'
        placeholder='Enter Something..' 
        value={currentTask}
        onChange={(e)=>{setCurrentTask(e.target.value)}}
        required/>
        <input type="submit" value="Submit" hidden/>
      </form>

      <div>
        <ul>
          {tasks.map((item, index) => {
            return  <Card key={index} item={item} index={index} deleteTask={deleteTask}/>
          })}
        </ul>
      </div>
    </div>
  )
}

export default App