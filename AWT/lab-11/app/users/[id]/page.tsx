import React from 'react'
import {db} from '@/lib/db'

async function UserById({params} : {params: Promise<{id : String}>}) {
    const {id} = await params;
    const data = await db.query(`SELECT * FROM users WHERE id = ${id}`)
    const res = data.rows
  return (
    <>
        <div>UserById</div>
        <table className='w-full text-left table-auto min-w-max'>
            <thead>
                <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>id</th>
                <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>name</th>
                <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>email</th>
                <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>city</th>
                <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>pin</th>
            </thead>
            <tbody>
                {res.map((user : any)=>(
                    <tr key={user.id}>
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

export default UserById