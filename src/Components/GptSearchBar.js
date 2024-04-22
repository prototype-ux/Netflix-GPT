import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';
import GptMovieSuggestion from './GptMovieSuggestion';




const GptSearchBar = () => {
    const [gptMovie,setgptMovie]=useState([])
    const searchText=useRef(null)
    const langKey=useSelector((store)=>store.config.lang)
    const handleGptSearchClick=async()=>{
      alert("Sorry, we're currently unable to process your request due to a temporary limitation on our OpenAI API key.")
       console.log(searchText.current.value);
        //make an API call to GPT API and get results
        if(searchText.current.value ){
        
        const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      console.log(gptQuery);
        const gptResults=await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          console.log(gptResults.choices?.[0]?.message?.content.split(","))
          const list=gptResults.choices?.[0]?.message?.content.split(",")
          setgptMovie(list);
          
          console.log("Movies gpt",gptMovie);
          
         
        
        }
        else setgptMovie([])
    }
    return (
        <div>
        <div className="pt-[50%] md:pt-[10%] flex justify-center">
          <form
            className="w-10/12 md:w-1/2 bg-black grid grid-cols-12 "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={searchText}
              type="text"
              className=" p-4 m-4 col-span-8 md:col-span-9"
              placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button
              className="col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg md:col-span-3"
              onClick={handleGptSearchClick}
            >
              {lang[langKey].search}
            </button>
          </form></div>
          {gptMovie && <div className='w-10/12 md:w-1/2 bg-black mx-auto  opacity-80'>
          { gptMovie.map((movie)=>(<GptMovieSuggestion movies={movie} />))}
          </div>}
        </div>

      );
}

export default GptSearchBar
