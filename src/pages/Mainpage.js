// Main.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './Head'; 
import Map from './Map'; 
import LostColumn from './LostColumn'; // '물건 찾아요'열
import FoundColumn from './FoundColumn'; // '주인 찾아요'열

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Head />
              <Map />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <LostColumn />
                <FoundColumn />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default Main;

