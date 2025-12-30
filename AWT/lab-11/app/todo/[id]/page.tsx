import React from 'react'
import {db} from '@/lib/db'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

async function TodoPage({params}: {params: Promise<{id: number}>}) {
    const {id} = await params

    const res = await prisma.todo.findFirst({
      where: {user_id : id}
    })

  return (
    <>
        <div>TodoPage</div>
        <table className='w-full text-left table-auto min-w-max'>
                    <thead>
                        <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>id</th>
                        <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>name</th>
                        <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>email</th>
                        <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>city</th>
                        <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>pin</th>
                    </thead>
                    <tbody>
                        {res?.map((todo : todo)=>(
                            <tr key={todo.task_id}>
                                <td className='p-4 border-b border-blue-gray-50'>{user.id}</td>
                                <td className='p-4 border-b border-blue-gray-50'>{user.name}</td>
                                <td className='p-4 border-b border-blue-gray-50'>{user.email}</td>
                                <td className='p-4 border-b border-blue-gray-50'>{user.city}</td>
                                <td className='p-4 border-b border-blue-gray-50'>{user.pin}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        
    </>
  )
}

export default TodoPage