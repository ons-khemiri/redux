import React, { useState } from "react";
import { add_task } from "../actions/actions";
import { useDispatch } from 'react-redux';
import { Button } from "semantic-ui-react";


function Add() {
    const dispatch=useDispatch()
    const [text,setText]= useState("")
    const handlAdd=()=>{
        dispatch(add_task({
            text,
            id:Math.random(),
            isDone:false
        }));
    setText("")
    }
    return(
        <div>
            <input type="text" placeholder='enter a new task' value={text} onChange={(e)=>setText(e.target.value)}/>
            <Button onClick={handlAdd}>add</Button>
        </div>
    )
}

export default Add