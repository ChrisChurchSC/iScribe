import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AppDemo from './pages/AppDemo'
import DesktopApp from './pages/DesktopApp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppDemo />} />
        <Route path="/desktop" element={<DesktopApp />} />
      </Routes>
    </BrowserRouter>
  )
}
