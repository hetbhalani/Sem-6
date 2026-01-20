import React from 'react'
import Link from 'next/link'
import { prisma } from '@/app/lib/prisma'
import DeleteButton from '@/components/DeleteButton'

async function userPage() {
    const res = await prisma.users.findMany()

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users List</h1>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Profile</th>
                        <th className="border border-gray-300 p-2">Todos</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {res.map((user: any) => (
                        <tr key={user.id} className="text-center">
                            <td className="border border-gray-300 p-2">{user.id}</td>
                            <td className="border border-gray-300 p-2">{user.name}</td>
                            <td className="border border-gray-300 p-2">
                                <Link href={`/users/${user.id}`} className="text-blue-600 underline">View</Link>
                            </td>
                            <td className="border border-gray-300 p-2">
                                <Link href={`/todo/${user.id}`} className="text-blue-600 underline">Todos</Link>
                            </td>
                            <td className="border border-gray-300 p-2">
                                <DeleteButton id={user.id} type={"user"} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default userPage