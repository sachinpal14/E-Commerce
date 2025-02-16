import React from 'react'
import './login.css'
const Login = () => {
    return (
        <div className='flex justify-center items-center p-6 rounded-xs'>

            <form action="https://formspree.io/f/movjnnzg" method='POST' className='flex flex-col w-96 shadow-xl h-[500px] p-4 justify-center gap-5'>
                <div className='flex flex-col relative h-20 justify-evenly anim' >
                    <input
                    required
                     className=' bg-transparent outline-none border-b-2 w-full px-4 py-2  ' 
                     type="text" id='first' name='full name'  />
                    <label 
                    className='absolute top-[35%]  px-1 text-gray-600 transform:translateY(-80%) transition-all duration-500'
                    htmlFor="first" >Enter Full Name </label>
                   
                </div>
                <div className='flex flex-col relative   h-20 justify-evenly anim ' >
                    <input
                    required
                    className='bg-transparent outline-none border-b-2 w-full px-4 py-2  ' type="email" id='second'name='email' />
                     <label 
                    className='absolute top-[35%] px-1 text-gray-600   transition-all duration-500'
                    htmlFor="second" >Enter Email </label>
                </div>

                <div className='w-full '>
                    <textarea required name='message' placeholder='Enter Feedback' className=' resize-none w-full h-24  shadow-xl outine-none border-none focus:border-none focus:outline-none rounded px-6 py-2'></textarea>
                </div>

                <button className='px-4 py-2 bg-gray-900 rounded-full text-2xl text-white cursor-pointer hover:bg-gray-300 active:scale-90 hover:text-black transition-all duration-300 hover:shadow-[inset_2px_2px_2px_black] font-semibold '>Sumbit</button>

            </form>

        </div>
    )
}

export default Login