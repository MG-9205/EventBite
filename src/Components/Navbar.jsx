import { Search } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-between px-6 items-center h-[4rem]">
        <div className="flex gap-4 justify-center items-center">
          <div className="text-[2rem] text-red-600 font-bold">EventBite</div>
          <div className="flex gap-3 justify-center items-center bg-gray-200 rounded-[50px] h-[2rem] px-2  w-[280px]">
            <Search className="text-gray-500 cursor-pointer" />
            <input
              type="text"
              placeholder="Search Here"
              className=" bg-transparent w-full outline-none mr-3"
            />
          </div>
        </div>
        <div className="flex gap-10 text-[1.1rem] font-semibold">
          <div className="flex justify-center items-center gap-4 ">
            <NavLink className='hover:text-red-600'>Event</NavLink>
            <NavLink className='hover:text-red-600'>MyEvent</NavLink>
            <NavLink className='hover:text-red-600' to='/CreateEvent'>Create Event</NavLink>
          </div>
          <div className="flex gap-1">
            <Link to='/Login'>Login</Link>/<Link to='/SignUp' className="text-blue-500">SignUp</Link>
          </div>
        </div>
      </header>
    </>
  );
}
