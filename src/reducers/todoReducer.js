import { ADD, DELETE } from "../actionTypes/actionType";
import { DONE, EDIT } from "../actionTypes/actionType";


const initialState={
    tasks:[
        {id:Math.random(),text:"task1",isDone:false},
    {id:Math.random(),text:"task2",isDone:false},
],
};

export const TodoRed=(state=initialState,{type,payload})=>{
    switch (type) {
        case ADD:
            return {...state,tasks:[...state.tasks,payload]};
            case DELETE:
                return {...state,tasks:state.tasks.filter((el)=>el.id!==payload)};
                case EDIT:
                    return {...state,tasks:state.tasks.map(el=>el.id===payload.id?{...el,text:payload.newTask}:el)}
                    case DONE:{
                        return {...state,tasks:state.tasks.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)}
                    }
                        default:
            return state;
    }
};