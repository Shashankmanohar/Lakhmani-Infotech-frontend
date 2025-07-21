import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ComputerLaptops from './Pages/ComputerLaptops'
import Television from './Pages/Television'
import Accessories from './Pages/Accessories'
import PrinterScanner from './Pages/PrinterScanner'
import Logistic from './Pages/Logistic'
import Locations from './Pages/Locations'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import OrderForm from './Pages/OrderForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/computer-laptops" element={<ComputerLaptops />} />
        <Route path="/television" element={<Television />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/printer-scanner" element={<PrinterScanner />} />
        <Route path="/logistic" element={<Logistic />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order/:category/:productId" element={<OrderForm />} />
      </Routes>
    </Router>
  )
}
