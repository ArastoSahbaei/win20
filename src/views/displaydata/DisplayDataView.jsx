import { useState, useEffect } from 'react'
import Axios from 'axios'

export const DisplayDataView = () => {
   const [serverResponse, setServerResponse] = useState()
   const [search, setSearch] = useState('')

   const fetchData = async () => {
      const API_URL = `https://pokeapi.co/api/v2/pokemon/${search}`
      try {
         const response = await Axios.get(API_URL)
         setServerResponse(response)
         console.log(response)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchData()
   }, [])

   return (
      <div>
         <input onChange={(event) => setSearch(event.target.value)} />
         <img src={serverResponse?.data.sprites?.front_shiny} alt={'Error'} />
         <h1>name: {serverResponse?.data.name}</h1>
         <h1>height: {serverResponse?.data.height}cm</h1>
         <h1>weight: {serverResponse?.data.weight}</h1>
         <button onClick={() => fetchData()}>Search For Pokemon</button>
      </div>
   )
}
