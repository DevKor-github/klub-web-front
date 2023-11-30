// FoundColumn.js
import React from 'react';
import Banner from './Banner.js'; 

const FoundColumn = () => {
  // Sample data, replace with actual data from your backend or state
  const foundItems = [
    { id: 1, image: '../found_image_1.jpg', title: 'Found Item 1' },
    { id: 2, image: '../found_image_2.jpg', title: 'Found Item 2' },
    // Add more items as needed
  ];

  return (
    <div>
      <h2>Found Items</h2>
      {foundItems.map((item) => (
        <Banner key={item.id} image={item.image} title={item.title} />
      ))}
    </div>
  );
};

export default FoundColumn;
