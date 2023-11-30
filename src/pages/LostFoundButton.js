// lostfoundbutton.js
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigButton = styled.button`
  font-size: 24px;
  padding: 15px;
  margin: 10px;
  background-color: rgb(134, 38, 51);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #E2E2E2;
    color: black;
    border: 1px solid #ccc;
  }
`;

function LostFoundButton() {
  return (
    <div className="App">
      <StyledDiv>
        <BigButton>물건 찾아요</BigButton>
        <BigButton>주인 찾아요</BigButton>
      </StyledDiv>
    </div>
  );
}

export default LostFoundButton;
