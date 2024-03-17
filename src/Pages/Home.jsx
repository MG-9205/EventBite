import React from 'react'
import Eventcard from '../Components/Eventcard'

export default function Home() {
 
  return (
    <>

    <div className='text-red-500 text-[2.5rem] font-bold ml-20 my-4'>
      Likes
    </div>
   <Eventcard/>
   <Eventcard/>
   <Eventcard/>
   
    </>
  )
}
