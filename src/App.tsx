import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Products from './components/products/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/product/product';
import Nav from './components/nav/nav';

function App() {
  
  return (
    <div>
      <BrowserRouter>
                <Nav></Nav>
                <Routes>
                    <Route path="/home" element={<Product/>}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                </Routes>
            </BrowserRouter>
    </div>
    
  );
}

export default App
