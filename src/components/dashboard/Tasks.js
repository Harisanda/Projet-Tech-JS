import React , {useState} from 'react'
import initialData from './config/datas'
import Column from './Column'
import { DragDropContext} from 'react-beautiful-dnd'

function Tasks() {
    const onDragEnd=result=>{
        const {destination, source, draggableId}= result 
        if(!destination){
            return
        }
        if(destination.droppableId == destination.droppableId &&  
        destination.index == source.index){
            return 
        }
        const start = datas.colomns[source.droppableId]
        const finish = datas.columns[destination.droppableId]

        if(start === finish){
            // si on bouge les éléments
            const column= datas.columns[source.droppableId]
            // on chappe les ids tâches actuelles
            const newTaskIds = Array.from[column.taskIds]
            // on remplace les places dans l'array 
            newTaskIds.splice(source.index,1) 
            newTaskIds.splice(destination.index,0, draggableId) 
            // on cree unz copie de la colonne de tache modifies
            const newColumn= {
                ...column,
                taskIds: newTaskIds,
            }
            const newState={
                ...datas,
                columns: {
                    ...datas.columns,
                    [newColumn.id] : newColumn 
                },
                
            }

            setData(newState)
            return 
        }
        const startTaskIds = Array.from[start.taskIds]
        startTaskIds.splice(source.index,1)
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        }

        const finishTaskIds = Array.from[finish.taskIds]
        finishTaskIds.splice[destination.index, 0, draggableId]
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        }

        const newState = {
            ...datas,
            columns : {
                ...datas.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }
        }
        // met à jour le tout
        setData(newState)
    }

    const [datas, setData]=useState(initialData)
  return (
    <div className='tasks'>
        <DragDropContext onDragEnd={onDragEnd}>
            {datas.columnOrder.map(columnId => {
                const column=datas.columns[columnId]
                const tasks= column.taskIds.map(taskId =>datas.tasks[taskId])
                return <Column key={column.id} column={column} tasks={tasks}/>
            })}
        </DragDropContext>
    </div> 
  )
}

export default Tasks