import React, {Component} from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
//import Nav from './components/Nav';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
import Resume from './components/Resume';
import PasswordGen from './components/PasswordGen';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className='app'>
          <Header />
          <main>
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/passwordgen" element={<PasswordGen />} />
            </Routes>
          </main>
        </div>
          <Footer />
      </HashRouter>
    );
  }
}

export default App;
