import { useState, useEffect } from 'react'
import Axios from 'axios'

export const DisplayDataView = () => {
   const [serverResponse, setServerResponse] = useState()
   const [loading, setLoading] = useState(true)
   const [search, setSearch] = useState('')

   const fetchData = async () => {
      const API_URL = `https://pokeapi.co/api/v2/pokemon/${search}`
      try {
         setLoading(true)
         const response = await Axios.get(API_URL)
         setServerResponse(response)
         setLoading(false)
      } catch (error) {
         console.log(error)
      }
   }

   const displayData = () => {
      return (
         <div>
            {serverResponse?.data.sprites && <img src={serverResponse?.data.sprites?.front_shiny} alt={'Error'} />}
            {serverResponse?.data.name && <h1>name: {serverResponse?.data.name}</h1>}
            {serverResponse?.data.height && <h1>height: {serverResponse?.data.height}cm</h1>}
            {serverResponse?.data.weight && <h1>weight: {serverResponse?.data.weight} </h1>}
         </div>
      )
   }

   useEffect(() => {
      fetchData()
   }, [search])

   return (
      <div>
         <input onChange={(event) => setSearch(event.target.value)} /> <br />
         {!loading ? displayData() : <h1>loading</h1>}
      </div>
   )
}
