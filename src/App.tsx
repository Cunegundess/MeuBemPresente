import { Route, Routes } from "react-router"
import LoveAnniversary from "./components/LoveAnniversary"
import HomePage from "./pages/HomePage"


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/nossa-historia" element={<LoveAnniversary />} />
    </Routes>
  )
}

export default App
