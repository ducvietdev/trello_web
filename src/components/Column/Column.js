import React from 'react'
import Task from '../Task/Task'
import './Column.scss'

function Column() {
    return (
        <div className="column">
            <header>BrainStorm</header>
            <ul className='task-list'>
                <Task />
                <li className='task-item'>What you like to work on below</li>
                <li className='task-item'>What you like to work on below</li>
                <li className='task-item'>What you like to work on below</li>
                <li className='task-item'>What you like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
    )
}

export default Column