import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

//  IMPORT LIBRARYS
import 'bootstrap/dist/css/bootstrap.min.css';

//  IMPORT COMPONENTS
import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ListProducts from './components/ListProducts/ListProducts';
import Category from './components/Category/Category';

// IMPORT PAGES
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/DetailPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <>
    
      <div className='App'>
          <Header />
        </div>
        <div>
          <NavBar />
        </div>
        <div>
          <ItemListConteiner gretting="Aprovecha esta Semana de Hot Week" />
        </div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/detail/:id" element={<DetailPage />}/>
          <Route path="/category/:categoryId" element={<Category />}/>
          <Route path="/*" element={<ErrorPage />}/>    
        </Routes>
          
    </>
    </Router>
  )
}

export default App
