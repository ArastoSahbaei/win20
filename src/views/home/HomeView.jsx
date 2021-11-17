import { useState } from 'react'
import { MyFirstComponent } from '../../MyFirstComponent'

export const HomeView = () => {
   const [value, setValue] = useState(true)

   return (
      <div>
         {value && <MyFirstComponent />}
         <button onClick={() => setValue(!value)}>Change value</button>
      </div>
   )
}
