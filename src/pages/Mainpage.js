// Mainpage.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from '../components/Head.js'; 
import Map from '../components/Map.js'; 
import LostColumn from '../components/LostColumn.js'; // '물건 찾아요'열
import FoundColumn from '../components/FoundColumn.js'; // '주인 찾아요'열

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

