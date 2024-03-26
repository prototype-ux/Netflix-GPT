import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  return (
    <div className='' >
      <Header/>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse
