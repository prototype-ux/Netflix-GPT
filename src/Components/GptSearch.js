import React from 'react'
import GptSearchBar from './GptSearchBar'


import { NETFLIX_BG } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
       <div className="fixed -z-10 ">
        <img className='h-screen object-cover w-screen'
          src={NETFLIX_BG}
          alt="bg-pic"
        />
      </div>
      <div className="">
        <GptSearchBar />
       
      </div>
    </>
  );
}

export default GptSearch
