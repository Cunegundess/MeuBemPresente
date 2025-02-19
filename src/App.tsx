import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import OurHistory from "./pages/OurHistory"


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nossa-historia" element={<OurHistory />} />
    </Routes>
  )
}

export default App
