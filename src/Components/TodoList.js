import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react';
import TodoCard from './TodoCard';


function TodoList() {
    const list =useSelector(state=>state.TodoRed.tasks)
    const [status,setStatus]=useState("all")
    return(
        <div>
            <br/>
            <Button onClick={()=>setStatus("all")}>all</Button>
            <Button onClick={()=>setStatus("done")}>done</Button>
            <Button onClick={()=>setStatus("undone")}>undone</Button>
            <br/>

            {status==="all"?list.map(el=><TodoCard tasks={el}/>):
            status==="done"?list.filter(el=>el.isDone).map(el=><TodoCard tasks={el}/>):
            list.filter(el=>!el.isDone).map(el=><TodoCard tasks={el}/>)
            }
        </div>
    )
}

export default TodoList