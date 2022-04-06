import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Hamburger from './components/Hamburger';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <>
      <div className='font-Josefin bg-mint min-w-screen'>
        <Nav toggle={toggle} />
        <Hamburger isOpen={isOpen} toggle={toggle} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />

      </div>





    </>




    //  <div className="container">
    //   <h1>Kristen's future portfolio</h1>
    // </div>
  );
}

export default App;

//Route links for later

// <Router>
//         <Header />

//         <Route path="/" exact>
//           <About />
//         </Route>
//         <Route path="/projects">
//           <Projects />
//         </Route>
//         <Route path="/contact">
//           <Contact />
//         </Route>


//       </Router>
