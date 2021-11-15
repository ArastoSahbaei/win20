import { Routes } from "./routes/Routes"
import { Navigation } from "./components/Navigation"

export const App = () => {
  return (
    <div>
      <Routes>
        <Navigation />
      </Routes>
    </div>
  )
}
