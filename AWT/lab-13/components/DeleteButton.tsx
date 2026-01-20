"use client"

import deleteTodo from "@/actions/deleteTodo"
import deleteUser from "@/actions/deleteUser"

function DeleteButton({ id, type }: { id: number; type: string }) {
    return (
        <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => {
                type === "user" ? deleteUser({ id }) : deleteTodo({ task_id: id })
            }}
        >
            Delete
        </button>
    )
}

export default DeleteButton

