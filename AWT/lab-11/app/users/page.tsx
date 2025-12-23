import React from 'react'
import {db} from '@/lib/db'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'


async function userPage() {
    // const data = await db.query("SELECT id,name FROM users") 
    // const res = data.rows

    const res = await prisma.users.findMany()

  return (
    <>
        <div>userPage</div>
        <table className='w-full text-left table-auto min-w-max'>
            <thead>
                <tr>
                    <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>id</th>
                    <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>name</th>
                    <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>info</th>
                </tr>
            </thead>
            <tbody>
                {res.map((user : any)=>(
                    <tr key={user.id}>
                        <td className='p-4 border-b border-blue-gray-50'>{user.id}</td>
                        <td className='p-4 border-b border-blue-gray-50'>{user.name}</td>
                        <td className='p-4 border-b border-blue-gray-50'>
                            <Link href={`/users/${user.id}`}>More info</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default userPage