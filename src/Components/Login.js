import React, { useState ,useRef} from 'react'
import Header from './Header'
import validateform from '../utils/validateform'

const Login = () => {
    const [isSignIn,setisSignIn]=useState(true)
    const password=useRef(null);
    const email=useRef(null);
    const name=useRef(null);
    const handleButtonClick=()=>{
      const message=validateform(email.current.value,password.current.value);
      console.log(email.current.value);
      console.log(password.current.value);
      console.log(message)
    }
    const togglesigninform=()=>{
            setisSignIn(!isSignIn)
    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img   src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      alt='bg-pic'/>
      
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='bg-black rounded-md bg-opacity-80 absolute mx-auto w-3/12 my-36 right-0 left-0 p-12 text-white text-center'> 
      <h1 className='text-3xl font-bold mb-6'>{isSignIn? "Sign In":"Sign Up"}</h1>
      {!isSignIn && <input ref={name} type='text' placeholder='Name' className='p-2 my-3 w-full rounded-md  bg-gray-500'/>}
        <input ref={email} type='text' placeholder='Email Address' className='p-2 my-3 w-full rounded-md  bg-gray-500'/>
        <input ref={password} type="password" placeholder='Password' className='p-2 my-3 w-full rounded-md  bg-gray-500' /> 
        <button className='p-2 my-3  bg-red-700 w-full rounded-md ' onClick={handleButtonClick}>{isSignIn? "Sign In":"Sign Up"}</button>
        <p>{isSignIn? "New to Netflix":"Already a User?"} <span className='font-semibold text-red-700 cursor-pointer' onClick={togglesigninform}>{isSignIn? "Sign Up":"Sign In"}</span> now!!</p>
      </form>
    </div>
  )
}

export default Login
