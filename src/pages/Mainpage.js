// Mainpage.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './Head'; // Import your Head component
import Map from './Map'; // Import your Map component
import Banner from './Banner'; // Import your Banner component

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
              {/* Render 8 Banner components dynamically */}
              {Array.from({ length: 8 }, (_, index) => (
                <Banner key={index} />
              ))}
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default Main;
