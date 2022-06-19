import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Modal } from 'semantic-ui-react'
import { edit_task } from "../actions/actions"

function Edit({id}) {
    const [open, setOpen] = React.useState(false)
    const [text, setText] = useState("")
   const dispatch=useDispatch();
   const handlEdit=()=>{
    dispatch(edit_task(text,id));
    setOpen(false)
};
    return(
        <div>
            <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Edit</Button>}>
      <Modal.Header>Edit task</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <input type="text" placeholder='enter new task' onChange={(e)=>setText(e.target.value)}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handlEdit }>OK</Button>
      </Modal.Actions>
    </Modal> 
        </div>
    )
}

export default Edit