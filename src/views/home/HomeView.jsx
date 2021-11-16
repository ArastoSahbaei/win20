import { useState, useEffect } from 'react'

export const HomeView = () => {
   const [value, setValue] = useState(0)
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      alert('First render')
      setTimeout(() => { setIsLoading(false) }, 3000);
      return (() => {
         alert('Last render')
      })
   }, [value])

   /*    componentWillMount(){ }
      componentDidUpdate(){ }
      componentWillUnMount(){ } */

   return (
      <div>
         {!isLoading && <h1>Is no longer loading</h1>}
      </div>
   )
}
