import React from 'react'

const VideoTitle = () => {
    return (
        <div className="w-screen aspect-square h-2/3  pt-[50%] md:h-screen md:aspect-video md:pt-[12%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
          <h1 className="text-2xl md:text-5xl font-bold">Shaitaan</h1>
          <p className="hidden md:inline-block py-6 text-lg w-1/4">The premise is undeniably intriguing: A man invades a family's home and gains control over their young daughter through black magic.</p>
          <div className="my-4 md:m-0">
            <button className=" bg-white text-black  px-6 py-2 text-lg  rounded-lg hover:bg-opacity-80">
               Play
            </button>
            <button className="  mx-2  bg-gray-500 text-white py-2 px-6 text-lg bg-opacity-50 rounded-lg">
              More Info
            </button>
          </div>
        </div>
      );
}

export default VideoTitle
