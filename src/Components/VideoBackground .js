import React from 'react'

const VideoBackground  = () => {
    return (
        <div className=" w-screen ">
          
          <iframe
        className=" aspect-square h-2/3 md:h-screen w-screen md:aspect-video"
        src={
          "https://www.youtube.com/embed/Yxe-mIVIwM4?si=0jFv5O9RqN8kYLn3?&autoplay=1&mute=1;controls=0&amp;start=25 "
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
        </div>
      );
}

export default VideoBackground 

