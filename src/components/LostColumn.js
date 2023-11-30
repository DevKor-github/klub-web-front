// LostColumn.js
import React from 'react';
import Banner from '../components/Banner.js'; 

const LostColumn = () => {
  // Sample data, replace with actual data from your backend or state
  const lostItems = [
    { id: 1, image: '../lost_image_1.jpg', title: 'Lost Item 1' },
    { id: 2, image: '../lost_image_2.jpg', title: 'Lost Item 2' },
    // Add more items as needed
  ];

  return (
    <div>
      <h2>Lost Items</h2>
      {lostItems.map((item) => (
        <Banner key={item.id} image={item.image} title={item.title} />
      ))}
    </div>
  );
};

export default LostColumn;
