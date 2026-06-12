import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AppDemo from './pages/AppDemo'
import DesktopApp from './pages/DesktopApp'
import SpecialtyPage from './pages/SpecialtyPage'
import BlogArticle from './pages/BlogArticle'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppDemo />} />
        <Route path="/desktop" element={<DesktopApp />} />
        <Route path="/specialties/:slug" element={<SpecialtyPage collection="specialties" />} />
        <Route path="/for/:slug" element={<SpecialtyPage collection="audiences" />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
      </Routes>
    </BrowserRouter>
  )
}
