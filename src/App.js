// import logo from './logo.svg'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import SkdStudios from './components/SkdStudios'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="skd-studios" element={<SkdStudios />} /> */}
      </Route>
      <Route path="/skd-studios" element={<SkdStudios />}></Route>
    </Routes>
  )
}

export default App
