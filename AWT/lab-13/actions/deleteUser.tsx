"use server"

import React from 'react'
import { prisma } from '@/app/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


async function deleteUser({id}:{id: number}) {
  await prisma.users.delete({
    where: {id}
  })
    revalidatePath('/users')
    redirect('/users')
  
}

export default deleteUser