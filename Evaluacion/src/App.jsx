import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Home from './pages/Home' 
import Login from './pages/Login' 
import Products from './pages/Post' 

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
