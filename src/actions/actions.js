import { ADD, DONE, EDIT, DELETE } from "../actionTypes/actionTypes";


export const add_task=(newTask)=>{
return{
type:ADD,
payload:newTask
}
}
export const delete_task=(id)=>{
    return{
    type:DELETE,
    payload:id
    }
    }
    export const done_task=(id)=>{
        return{
        type:DONE,
        payload:id
        }
        }
        export const edit_task=(newTask,id)=>{
            return{
            type:EDIT,
            payload:{newTask,id}
            }
            } 