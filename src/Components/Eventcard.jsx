import React, { useState } from 'react'
import image1 from "../assets/homeimg.jpg"
import { Download } from 'lucide-react'

export default function Eventcard() {
  const [liked, setLiked] = useState(false);
  const [fill,setFill]=useState('none')

  const handleLike = () => {
    setLiked(!liked); // Toggle the liked state
    if(fill=='none'){
      setFill('currentColor')
    }
    else{
      setFill('none')
    }
  };
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-12'>
    <div className='flex gap-4 w-[670px]'>
      <div className='h-[120px] w-[220px] rounded-[5px]'>
        <img src={image1} alt="" className='h-[120px] w-[220px] object-cover rounded-[5px]' />
      </div>
      <div className='flex flex-col gap-2 w-[400px] '>
        <span className='font-semibold text-[1.1rem]'>Hello Welcome to the MH company Event</span> 
        <span> Mon.15 feb,10:00pm IST</span>
        <span>start at:9:00am</span>
      </div>
      <div className='flex gap-3 items-end justify-center h-[full] pl-10'>
      <Download />
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className={`lucide lucide-heart cursor-pointer ${liked ? 'text-red-500' : 'text-black'} transition-colors duration-300`} onClick={handleLike}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </div>
    </div></div>
    </>
  )
}
