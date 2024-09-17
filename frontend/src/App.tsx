import LoginForm from './LoginPage/Login'
import HomePage from './HomePage/Homepage'
import GamePage from './GamePage/GamePage'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </Router>
  )
}

export default App
