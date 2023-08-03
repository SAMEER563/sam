import React from 'react'
import Link from 'next/link'
import {FcAdvertising} from "react-icons/fc";
import {GoLocation} from "react-icons/go";
import {LuHotel} from "react-icons/lu";
import {FiSettings} from "react-icons/fi";
import {SiPowerpages} from "react-icons/si";
// import { FaBowlFood } from 'react-icons/fa';

export const Homepage = () => {
  return (
    <div className='bg-gray-100 w-screen min-h-screen'>
    <div className='flex justify-start items-start'>
      <aside className='rounded-lg w-60 p-4'>
      <h1 className='text-4xl pb-4'>Homepage </h1>
      <ul>
        <li className='pl-9 pt-4 flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <Link href="/cuisines">Cuisines</Link></li>

      <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
            <FcAdvertising  className='mr-2'/>
            <Link href="/advertisement">Advertisement</Link>
          </li> 
        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
            <GoLocation className='mr-2'/>
            <Link href="/location">Location</Link>
          </li> 
          <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
            <SiPowerpages className='mr-2'/>
            <Link href="/pages">Pages</Link>
        
          </li>
        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
            <LuHotel className='mr-2'/>
            <Link href="/restaurants">Restaurants</Link>
          </li>
          <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
            <FiSettings className='mr-2'/>
            <Link href="/settings">Settings</Link>
          </li>
      </ul>
      </aside>
    </div>
    </div>
  )
}

export default Homepage;
