"use client"

import deleteTodo from "@/actions/deleteTodo"
import deleteUser from "@/actions/deleteUser"

function DeleteButton({id}:{id: number}, {type}: {type: string}) {
  return (
    <>
        <button onClick={
            ()=>{
                console.log("Btn clicked for :"+id)

                type == "user" ? deleteUser({id}) : deleteTodo({id})
                
            }
        }>KADHO</button>
    </>
    )
}

export default DeleteButton