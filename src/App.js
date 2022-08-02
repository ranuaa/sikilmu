
// import './App.css';
import Home from './Pages/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import Reports from './Pages/Reports';
import Detail from './Pages/Detail';
import Store from './Pages/Store';

function App() {
  return (
    <>
    <Routes>
          <Route>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Product/>} />
              <Route path='/report' element={<Reports/>} />
              <Route path='/detail/:id' element={ <Detail/>  } />
              <Route path='/store' element={<Store/>} />
          </Route>
    </Routes>
    </>
      
  );
}

export default App;
