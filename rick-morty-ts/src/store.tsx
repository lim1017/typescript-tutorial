import React, { useReducer } from 'react'

interface iState{
  episodes:[],
  favourites:[]
}

interface iAction{
  type: string,
  payload: any
}

const initialState:iState={
  episodes:[],
  favourites:[]
}
export const Store = React.createContext<iState | any>(initialState)

function reducer(state:iState, action:iAction){
  switch(action.type){
    case 'FETCH_DATA':
      return {...state, episodes:action.payload}
    default:
      return state
  }
}

export function StoreProvider(props:any): JSX.Element {
  
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}

