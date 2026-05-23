import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}