import React from 'react'
import Link from'next/link'

export const Advertisement = () => {
  return (
    <div className='text-black-500 text-lg flex-col font-bold'>
        <Link href="/">Admin Panel</Link>
        <h1 className='text-4xl pt-3 text-blue-500 font-bold' >This is our Advertisment Page</h1>
    </div>
  )
}

export default Advertisement;