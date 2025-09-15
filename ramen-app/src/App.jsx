import { Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Menu from "./components/pages/Menu"

function App() {


  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
