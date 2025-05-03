import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from './components/header/Header';
import { HomePage } from './pages/HomePage';
import { EmployeesPage } from './pages/EmployeesPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/employees" element={<EmployeesPage/>} />
      </Routes>
    </>
  )
}

export default App
