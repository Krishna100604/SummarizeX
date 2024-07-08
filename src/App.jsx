import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Explore from './components/Explore';
import Home from './Pages/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <main>
        <div className='main bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 min-h-screen flex items-center justify-center'>
          <div className='gradient absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-400 to-red-400 opacity-70 transform -skew-y-6'></div>
        </div>
        
        <div className='App relative z-10 p-10 flex flex-col items-center justify-center'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
