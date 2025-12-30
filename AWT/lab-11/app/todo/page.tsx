import React from 'react'
import {db} from '@/lib/db'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'


async function todoPage() {
    // const data = await db.query("SELECT id,name FROM users") 
    // const res = data.rows

    const res = await prisma.todo.findMany()

  return (
    <>
        <div>todoPage</div>
        <table className='w-full text-left table-auto min-w-max'>
            <thead>
                <tr>
                    <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>id</th>
                    <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>todo</th>
                    <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>description</th>
                    <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>is Completed</th>
                </tr>
            </thead>
            <tbody>
                {res.map((task : any)=>(
                    <tr key={task.task_id}>
                        <td className='p-4 border-b border-blue-gray-50'>{task.task_id}</td>
                        <td className='p-4 border-b border-blue-gray-50'>{task.todo}</td>
                        <td className='p-4 border-b border-blue-gray-50'>{task.description}</td>
                        <td className='p-4 border-b border-blue-gray-50'>{task.isDone}</td>
                        <td className='p-4 border-b border-blue-gray-50'>
                            <Link href={`/users/${task.user_id}`}>user</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default todoPage