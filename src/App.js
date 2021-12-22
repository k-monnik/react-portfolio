import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <About />
      </Route>
      <Route path="/" exact>
        <Projects />
      </Route>
      <Route path="/" exact>
        <Contact />
      </Route>
    </Router>

    // { /* <div className="container">
    //   <h1>Kristen's future portfolio</h1>
    // </div> */}
  );
}

export default App;
