import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import { DisplayDataView } from "../views/displaydata/DisplayDataView"
import { HomeView } from '../views/home/HomeView'
import { MoviesView } from '../views/movies/MoviesView'
import RoutingPath from "./RoutingPath"

export const Routes = ({ children }) => {
   return (
      <BrowserRouter>
         {children}
         <Switch>
            <Route path={RoutingPath.homeView} element={<HomeView />} />
            <Route path={RoutingPath.moviesView} element={<MoviesView />} />
            <Route path={RoutingPath.displayDataView} element={<DisplayDataView />} />
         </Switch>
      </BrowserRouter>
   )
}
