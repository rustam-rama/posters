import {useState, useEffect} from 'react'
import fetch from 'unfetch';
import {API_KEY, API_URL} from 'config'

const useHomeFetch = ()=>{
const [state, setState] = useState({movies: []})
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

const fetchMovies = async (url)=>{
  setError(false)
  setLoading(true)

try{
  const result = await(await fetch(url)).json()

setState(prevState=>({
  ...prevState,
  movies: [...result.results],
  heroImage: prevState.heroImage || result.results[0],
  currentPage: result.page,
  totalPage: result.total_pages,
  
}))

}catch(error){
setLoading(false)
console.warn(error)
  }
}

useEffect(()=>{
  fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}&language=ru`)
}, [fetchMovies])

  return [{state, loading, error}, fetchMovies]
}

export default useHomeFetch