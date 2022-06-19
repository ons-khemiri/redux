import React from "react";
import { useDispatch } from 'react-redux';
import { Button } from "semantic-ui-react";
import { delete_task, done_task } from '../actions/actions';
import Edit from "./Edit";

function TodoCard({tasks}) {
   const dispatch=useDispatch()
    return(
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <h2>{tasks.text}</h2>
        <Edit id={tasks.id}/>
        <Button onClick={()=>{dispatch(delete_task(tasks.id))}}>delete</Button>
        <Button onClick={()=>{dispatch(done_task(tasks.id))}}>{tasks.isDone?"done":"undone"}</Button>
        </div>
    )
}

export default TodoCard