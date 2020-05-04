import React from 'react'
import Hero from 'elements/Hero'
import useHomeFetch from 'elements/Hooks/useHomeFetch'
import {BACKDROP_SIZE, IMAGE_BASE_URL} from 'config'

const Home = () => {
const [{state, loading, error}, fetchMovies] = useHomeFetch()

if(!state.movies[0]) return <div>loading...</div>
  
  return (
    <>
      <Hero image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}/>
      text={state.heroImage.owerview}
      title={state.heroImage.title}
    </>
  )
}

export default Home