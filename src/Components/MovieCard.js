import React from 'react'

const MovieCard = ({posterPath}) => {
  //console.log(posterPath)
    if (!posterPath) return null;
    return (
      <div className=" pr-6 flex-shrink-0">
        <img className=" h-[120px] w-[120px] object-cover" alt="Movie Card" src= {posterPath }/>
      </div>
    );
}

export default MovieCard
