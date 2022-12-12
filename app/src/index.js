import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PaychecksForEmployee from './PaychecksForEmployee';
import { BrowserRouter,  Routes, Route } from "react-router-dom";

//using react router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/PaychecksForEmployeeId/:id" element={<PaychecksForEmployee />} />
        <Route path="/Edit/:id" element={<PaychecksForEmployee />} />
        <Route path="/Delete/:id" element={<PaychecksForEmployee />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);