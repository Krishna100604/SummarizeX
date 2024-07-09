import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Explore from './components/Explore';
import Home from './Pages/Home';
import Navbar from './Navbar';
import Profile from './Pages/ProfilePage';
import Payment from './Pages/PaymentPage';
import { ThemeProvider } from './ThemeProvider';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Include the Navbar component */}
          <Navbar />

          <main className="flex-grow bg-gradient-to-r from-purple-400 via-pink-400 to-red-500">
            <div className='gradient absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-400 to-red-400 opacity-70 transform -skew-y-6'></div>

            <div className='relative z-10 p-10 flex flex-col items-center justify-center'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/payment' element={<Payment />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
