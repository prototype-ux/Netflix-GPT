import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn,setisSignIn]=useState(true)
    const toggleform=()=>{
            setisSignIn(!isSignIn)
    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img   src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      alt='bg-pic'/>
      
      </div>
      <form className='bg-black rounded-md bg-opacity-80 absolute mx-auto w-3/12 my-36 right-0 left-0 p-12 text-white text-center'> 
      <h1 className='text-3xl font-bold mb-6'>{isSignIn? "Sign In":"Sign Up"}</h1>
      {!isSignIn && <input type='text' placeholder='Name' className='p-2 my-3 w-full rounded-md  bg-gray-500'/>}
        <input type='text' placeholder='Email Address' className='p-2 my-3 w-full rounded-md  bg-gray-500'/>
        <input type="password" placeholder='Password' className='p-2 my-3 w-full rounded-md  bg-gray-500' /> 
        <button className='p-2 my-3  bg-red-700 w-full rounded-md '>{isSignIn? "Sign In":"Sign Up"}</button>
        <p>{isSignIn? "New to Netflix":"Already a User?"} <span className='font-semibold text-red-700 cursor-pointer' onClick={toggleform}>{isSignIn? "Sign Up":"Sign In"}</span> now!!</p>
      </form>
    </div>
  )
}

export default Login
