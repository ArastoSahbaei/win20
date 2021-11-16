import { Routes } from "./routes/Routes"
import { Navigation } from "./components/Navigation"
import { GlobalStyles } from "./shared/styles/GlobalStyles"

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Navigation />
      </Routes>
    </div>
  )
}
