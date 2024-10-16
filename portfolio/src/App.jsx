import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"
import Projects from "./sections/Projects.jsx"
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/about" element={
                    <>
                        <Navbar/>
                        <About/>
                        <Projects/>
                        <Experience/>
                        <Contact/>
                        <Footer/>
                    </>
                } />
            </Routes>
        </Router>
    )
}

export default App