import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import BetaRegistration from './pages/BetaRegistration'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/beta" element={<BetaRegistration />} />
    </Routes>
  )
}

export default App
