import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './views/Dashboard'
import Pharmacy from './views/PharmacyService'
import Reservation from './views/Reservation';
import DashboardRight from './components/DashboardRight';
import Payment from './views/Payment';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route index element= {<DashboardRight/>} />
          <Route path="/Pharmacy" element={<Pharmacy/>} />
          <Route path="/reservation" element={<Reservation/>} exact={true} />
          <Route path="/Dashboard/Payment" element={<Payment/>} exact={true} />
        </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
