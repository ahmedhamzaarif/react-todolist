import React from 'react'
import classes from './Card.module.css'

const Card = ({item, index, deleteTask}) => {
  return (
    <div className='shadow-xl my-2 p-4 bg-slate-50 rounded-md'>
        <h2 className={classes.title}>Task #{index + 1}</h2>
        <button onClick={(e)=>{deleteTask(index)}} className='float-right'> ❌ </button>
        <div className='flex gap-x-2'>
            <input type="checkbox" id="todo" className='me-2'/>
            <label htmlFor="todo" className='w-full overflow-hidden'>
                {item}
            </label>
        </div>
    </div>
  )
}

export default Card