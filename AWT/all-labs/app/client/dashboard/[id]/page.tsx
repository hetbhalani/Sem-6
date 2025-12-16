import React from 'react'

async function page({params}:{params: Promise<{id: String}>}) {

    const {id} = await params

  return (
    <div>{id}</div>
  )
}

export default page