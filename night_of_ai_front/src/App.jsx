import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomPage from './pages/RoomPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/rooms" element={<RoomPage />} />
        {/* 다른 Route 추가 */}
      </Routes>
    </Router>
  );
};

export default App;