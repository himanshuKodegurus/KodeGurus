import React  from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Common/Header/Header';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Common/Footer/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
