import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const Navigation = () => {
   const navigate = useNavigate()

   return (
      <div>
         <p onClick={() => navigate(RoutingPath.homeView)}>Home</p>
         <p onClick={() => navigate(RoutingPath.moviesView)}>Movies</p>
         <p onClick={() => navigate(RoutingPath.displayDataView)}>API</p>
      </div>
   )
}
