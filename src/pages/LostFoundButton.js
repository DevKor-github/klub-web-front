// lostfoundbutton.js
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center vertically */
  height: 100vh; /* Set the height to 100% of the viewport height */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row; /* Align buttons in a row */
  gap: 20px; /* Add some space between buttons */
`;

const BigButton = styled.button`
  font-size: 24px;
  padding: 15px;
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
        <ButtonContainer>
          <BigButton>물건 찾아요</BigButton>
          <BigButton>주인 찾아요</BigButton>
        </ButtonContainer>
      </StyledDiv>
    </div>
  );
}

export default LostFoundButton;
