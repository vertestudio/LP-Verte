import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

import Home from './pages/Home/Home'
import Marca from './pages/Marca/Marca'
import Departamento from './pages/Departamento/Departamento'

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marca" element={<Marca />} />
        <Route path="/departamento/:slug" element={<Departamento />} />
      </Routes>
    </>
  )
}