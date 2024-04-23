// import logo from './logo.svg';


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Career from './Pages/Career';
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';
import Resume from './Pages/portfolio/resume';


function App()  {
  
    return(
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='resume' element={<Resume />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='aboutus' element={<AboutUs />}/>
          <Route path='career' element={<Career />}/>
          <Route path='*' element={<NoPage />}/>
  
        </Route>
      </Routes>
      </BrowserRouter>
    );
  
};


export default App;
