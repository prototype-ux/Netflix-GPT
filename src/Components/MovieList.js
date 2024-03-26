import React from 'react'
import movies from '../utils/mockmovielist';
import MovieCard from './MovieCard';
import shuffle from 'lodash/shuffle'; 


const MovieList = ({title}) => {
  const shuffledMovies = shuffle(movies);
  //console.log(movies)
    return (
        <div className="px-6 ">
          <h1 className="text-2xl  py-4 text-white">{title}</h1>
          
            <div className="flex mb-8 overflow-x-auto custom-scrollbar">
              {shuffledMovies?.map((movie) => (
                
                <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
              ))}
            </div>
          
        </div>
      );
}

export default MovieList


