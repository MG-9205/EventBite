import React from 'react'


export default function Login() {
    const handleCerdentails=()=>{

    }
    const handleLogin=()=>{

    }
  return (
    <>
    <div className='w-full flex justify-center items-center mt-10'>
    <div className="flex justify-center items-center flex-col border-2 w-[85vw] md:w-[420px] pb-5 rounded-[10px] ">
          <div className="w-full  flex flex-col justify-end  pb-20 mb-7 bg-red-500 rounded-br-[150px] ">
            <div className="w-full flex flex-col  items-start ml-5 mt-2 ">
              <p className="text-4xl font-semibold  text-white z-10 text-left">
                Welcome
              </p>
              <p className="text-4xl font-semibold  text-white z-10 text-left">
                Back
              </p>
              <p className="text-xm font-medium text-white mt-4 z-10 text-left">
                Please sign-in to continue!
              </p>
            </div>
          </div>

          <div className="w-[80vw] md:w-[400px]  flex flex-col items-center mt-10 mx-3">
            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => {
                  handleCerdentails(e);
                }}
                className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-red-400"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  handleCerdentails(e);
                }}
                className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-red-400"
              />
            </div>
         
            <button
              type="submit"
              onClick={(e) => {
                handleLogin(e);
              }}
              className="w-[80%] max-w-150 px-4 py-2 text-white text-base font-semibold rounded-full cursor-pointer transition duration-300 ease-in-out bg-gradient-to-r from-red-500 to-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:brightness-103 my-5"
            >
              Login
            </button>
            
          
          </div>
        </div></div>
    </>
  )
}
