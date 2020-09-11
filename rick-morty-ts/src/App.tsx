import React, {useContext, useEffect} from 'react'
import { Store } from './store'

export default function App(): JSX.Element{
  
  const {state, dispatch} = useContext(Store)

  console.log(state)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async ()=>{
    const URL = 'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    console.log(dataJSON)

    return dispatch({type:'FETCH_DATA', payload: dataJSON._embedded.episodes})
  }

  return (
    <div>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episoides!!</p>
    </div>
  )
}
