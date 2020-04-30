import React, {useState, useEffect} from 'react'
import Grid from 'elements/Grid'

import {API_URL, API_KEY, POSTER_SIZE, IMAGE_BASE_URL, BACKDROP_SIZE} from "config"

const Home = () => {
  const [state, setState] = useState({movies: []})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setError(false)
    
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}`)
    .then(result =>result.json())
    .then(result =>{
      setLoading(false)
      setState(result)
    })
    .catch(error =>{
      setError(true)
    })
  }, [])
  
  return (
    <div>
      {loading ? <div>loading...</div>: <Grid />}
    </div>
  )
}

export default Home