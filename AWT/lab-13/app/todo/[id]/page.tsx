import React from "react";
import Link from "next/link";
import { prisma } from "@/app/lib/prisma";
import { todo } from '@/app/generated/prisma/client'


async function TodoPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
    const numId = Number(id);
  const res = await prisma.todo.findMany({
    where: { user_id: numId },
  });

  return (
    <>
      <div>TodoPage</div>
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            task id
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            task
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            description
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            isDone
          </th>
          
        </thead>
        <tbody>
          {(Array.isArray(res) ? res : [res])
            .filter(Boolean)
            .map((todo: todo) => (
              <tr key={todo.task_id}>
                <td className="p-4 border-b border-blue-gray-50">{todo.task_id}</td>
                <td className="p-4 border-b border-blue-gray-50">
                  {todo.task}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {todo.description}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {todo.isDone}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoPage;
