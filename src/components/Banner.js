// Banner.js
import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  width: 300px; // Adjust the width as needed
  margin: 0 10px; // Add margin between banners
  justify-content: space-between;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px; // Add rounded corners to images
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
      <img src={image} alt={title} />  //배너에 사진과 제목 넣기
      <h2>{title}</h2>
    </StyledBanner>
  );
};

export default Banner;

