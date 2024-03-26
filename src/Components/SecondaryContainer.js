import React from 'react'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  return (
    
      <div className="bg-black  w-screen ">
        <div className=" mt-[-70px] md:mt-[-160px]  pl-2 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"}/>
          <MovieList title={"Trending"}  />
          <MovieList title={"Popular"}  />
          
          <MovieList title={"Horror"} />
        </div>
      </div>
    
  );
}

export default SecondaryContainer
