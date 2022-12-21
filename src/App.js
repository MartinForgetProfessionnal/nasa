import React from 'react'
import nasaLogo from './components/images/nasa.ico'
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';
import './App.scss'
import CuriosityHistory from './components/CuriosityHistory';
import MainComponent from './components/MainComponent';
import PictureOfDay from './components/PictureOfDay';
import SweetAlerts from './components/SweetAlerts';



function App() {

  return <>

  {/* Toute la navbar avec les liens qui mènent aux pages liées par le routing */}
    <nav>
      <div className='leftNav'>
        <img src={nasaLogo} alt='Logo' className='logo' />
        <p className='na'>NA<span className='sa'>SA</span></p>
      </div>

      <NavLink className="navlinks" style={({ isActive }) => {
        // Condition qui fait changer la couleur lorsqu'il est actif
        return isActive ? { color: "#fff" } : {}
      }} to="/">

        {({ isActive }) => {
          return isActive ? "Home" : "Home"
        }}
      </NavLink>

      <NavLink className="navlinks" style={({ isActive }) => {
        return isActive ? { color: "#fff" } : {}
      }} to="/resultimg">

        {({ isActive }) => {
          return isActive ? "Picture of the day" : "Picture of the day"
        }}
      </NavLink>

      <NavLink className="navlinks" style={({ isActive }) => {
        return isActive ? { color: "#fff" } : {}
      }} to="/marsimages">

        {({ isActive }) => {
          return isActive ? "Curiosity pictures" : "Curiosity pictures"
        }}
      </NavLink>

      <NavLink className="navlinks" style={({ isActive }) => {
        return isActive ? { color: "#fff" } : {}
      }} to="/history">

        {({ isActive }) => {
          return isActive ? "Curiosity History" : "Curiosity History"
        }}
      </NavLink>

      <NavLink className="navlinks" style={({ isActive }) => {
        return isActive ? { color: "#fff" } : {}
      }} to="/about">

        {({ isActive }) => {
          return isActive ? "About" : "About"
        }}
      </NavLink>

      <NavLink className="navlinks" style={({ isActive }) => {
        return isActive ? { color: "#fff" } : {}
      }} to="/contact">

        {({ isActive }) => {
          return isActive ? "Contact Us" : "Contact Us"
        }}
      </NavLink>
      <div className="alert"><SweetAlerts/></div>      
    </nav>
    {/* Toute les routes */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/marsimages" element={<MainComponent />}/>
      <Route path="/resultimg" element={<PictureOfDay />} />
      <Route path="/history" element={<CuriosityHistory />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
}

export default App