import React from 'react'
import Link from 'next/link'
import { prisma } from '@/app/lib/prisma'
import DeleteButton from '@/components/DeleteButton'


async function todoPage() {
    const res = await prisma.todo.findMany()

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Tasks List</h1>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Task</th>
                        <th className="border border-gray-300 p-2">Description</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Assigned To</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {res.map((task: any) => (
                        <tr key={task.task_id} className="text-center">
                            <td className="border border-gray-300 p-2">{task.task_id}</td>
                            <td className="border border-gray-300 p-2">{task.todo}</td>
                            <td className="border border-gray-300 p-2">{task.description}</td>
                            <td className="border border-gray-300 p-2">
                                {task.isDone ? "Yes" : "No"}
                            </td>
                            <td className="border border-gray-300 p-2">
                                <Link href={`/users/${task.user_id}`} className="text-blue-600 underline">
                                    User {task.user_id}
                                </Link>
                            </td>
                            <td className="border border-gray-300 p-2">
                                <DeleteButton id={task.task_id} type={"task"} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default todoPage
