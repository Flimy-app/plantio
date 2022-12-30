import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Daftar from './components/pages/Daftar';
import Chatbot from './components/pages/Chatbot';
import DaftarPert from './components/pages/DaftarPert';
import DaftarPert2 from './components/pages/DaftarPert2';
import DaftarPert3 from './components/pages/DaftarPert3';
import DaftarPert4 from './components/pages/DaftarPert4';
import DaftarPert5 from './components/pages/DaftarPert5';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <HeroSection/> */}
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/Daftar' element={<Daftar/>} />
          <Route path='/DaftarPert' element={<DaftarPert/>}/>
          <Route path='/DaftarPert2' element={<DaftarPert2/>}/>
          <Route path='/DaftarPert3' element={<DaftarPert3/>}/>
          <Route path='/DaftarPert4' element={<DaftarPert4/>}/>
          <Route path='/DaftarPert5' element={<DaftarPert5/>}/>
          <Route path='/Chatbot' element={<Chatbot/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;