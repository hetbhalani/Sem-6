"use server"

import React from 'react'
import { prisma } from '@/app/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


async function deleteTodo({task_id}:{task_id: number}) {
  await prisma.todo.delete({
    where: {task_id}
  })
    revalidatePath('/todo')
    redirect('/todo')
  
}

export default deleteTodo