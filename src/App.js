import React  from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import Service from './Components/Pages/Service/Service'
import Contact from './Components/Pages/Contact/Contact'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/about.jsx'
import Portfolio from './Components/Pages/Portfolio/Portfolio';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/service' element={<Service/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/portfolio' element={<Portfolio/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
