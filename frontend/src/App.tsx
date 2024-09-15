import LoginForm from './LoginPage/Login'
import Homepage from './HomePage/Homepage'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </Router>
  )
}

export default App
