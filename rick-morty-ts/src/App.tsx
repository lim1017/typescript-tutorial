import React, {useContext, useEffect} from 'react'
import { Store } from './store'
import './App.css'



export default function App(): JSX.Element{
  
  const {state, dispatch} = useContext(Store)

  console.log(state)

  useEffect(() => {
    if(state.episodes.length === 0){
      fetchData()
    } 
    
  }, [])

  const fetchData = async ()=>{
    const URL = 'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    console.log(dataJSON)

    return dispatch({type:'FETCH_DATA', payload: dataJSON._embedded.episodes})
  }

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episoides!!</p>
      <section>
        {state.episodes.map((item:any)=>{
         return <div key={item.id} className="episode-container">
           <img src={item.image.medium} alt={`Rick & Morty ${item.name}`}/>
           <div>{item.name}</div>
           <section>
            Season:{item.season} Number:{item.number}
           </section> 
           </div>
        })}
      </section>
    </div>
  )
}
