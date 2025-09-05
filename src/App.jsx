import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import DashboardLayout from './components/DashboardLayout';
import DashboardContent from './components/DashboardContent';
import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <BrowserRouter> 
      <DashboardLayout>
        <Routes> 
          <Route path="/" element={<DashboardContent />} />
          
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
