import React  from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Common/Header/Header';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Common/Footer/Footer';
import Service from './Components/Pages/Service/service';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/service' element={<Service/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
