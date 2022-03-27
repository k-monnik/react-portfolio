import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='font-Josefin bg-mint'>
        <Nav />
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
