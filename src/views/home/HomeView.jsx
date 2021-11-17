import { useEffect, useState } from 'react'

export const HomeView = () => {
   const [number, setNumber] = useState(0)

   //ComponentWillMount
   //ComponentWillUnMount
   //ComponentDidUpdate

   useEffect(() => {
      alert("First render")
      return (() => {
         alert("Last render")
      })
   }, [number])

   return (
      <div>
         <h1 onClick={() => setNumber(number + 1)}>{number}</h1>
      </div>
   )
}
