import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Education" component={Education}/>
          <Route path="/Skills" component={Skills}/>
          <Route path="/Languages" component={Languages}/>
          <Route path="/Experience" component={Experience}/>
          <Route path="/Projects" component={Projects}/>
          <Route path="/Certifications" component={Certifications}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;