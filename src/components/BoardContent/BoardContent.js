import React, { useEffect, useState } from 'react'
import Column from '../Column/Column'
import { isEmpty } from 'lodash'
import './BoardContent.scss'
import { initialData } from '../../actions/initialData'
import { mapOrder } from '../../utilities/sorts'

function BoardContent() {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState([])

    useEffect(() => {
      const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
      if(boardFromDB) {
        setBoard(boardFromDB)

        // Sort Advanced
        // boardFromDB.columns.sort(function(a, b){
        //   return boardFromDB.columnOrder.indexOf(a.id) - boardFromDB.columnOrder.indexOf(b.id)
        // })

        setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
      }
    }, [])

    if(isEmpty(board)) {
      return <div className='not-found' style={{ padding: '10px', color: '#fff' }}>Board not found!</div>
    }

    return (
        <div className='board-content'>
          {columns.map((column, index) => <Column key={index} column={column} />)}
        </div>
    )
}

export default BoardContent