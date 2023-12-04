// Banner.js
import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 300px; // Adjust the width as needed
  margin: 10px; // Add margin between banners
  justify-content: space-between;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px; // Add rounded corners to images
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    font-family: 'Pretendard-Bold', sans-serif;
    cursor: pointer;
    white-space: pure;
    text-decoration: none;
    color: inherit;
    margin-top: 10px;

    &:hover {
      color: rgb(134, 38, 51);
    }
  }
`;

const Banner = ({ image, title }) => {
  return (
    <StyledBanner>
      <img src={image} alt={title} /> 
      <h2>{title}</h2>
    </StyledBanner>
  );
};

export default Banner;

//FoundColumn.js
import React, { useState } from 'react';
import Banner from './Banner.js';

const FoundColumn = () => {
  const [foundItems, setFoundItems] = useState([
    { id: 1, image: '../found_image_1.jpg', title: 'Found Item 1' },
    { id: 2, image: '../found_image_2.jpg', title: 'Found Item 2' },
  ]);

  const handleFileUpload = (event, itemId) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedItems = foundItems.map((item) =>
          item.id === itemId ? { ...item, image: reader.result } : item
        );
        setFoundItems(updatedItems);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Found Items</h2>
      {foundItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <Banner image={item.image} title={item.title} />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default FoundColumn;
