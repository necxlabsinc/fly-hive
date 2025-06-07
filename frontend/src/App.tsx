// filepath: /c:/Users/Administrator/fly-hive/frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentPage from './PaymentForm';
import TicketPage from './TicketPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/ticket" element={<TicketPage />} />
    </Routes>
  </Router>
);

export default App;

