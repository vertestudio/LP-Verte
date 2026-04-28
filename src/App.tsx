import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Marca from './pages/Marca/Marca'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marca" element={<Marca />} />
    </Routes>
  )
}