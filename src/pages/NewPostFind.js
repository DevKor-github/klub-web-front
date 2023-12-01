import React, { useState } from 'react';
import styled from 'styled-components';

export const SharedLabelStyle = styled.label`
  font-size: 20px;
  /* Add any other shared styles if needed */
`;

// 제목 입력란
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.p`
  margin-left: 5px;
  margin-right: 15px;
  white-space: nowrap; /* Prevent line breaks */
  font-size: 20px;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TitleComponent = () => {
  const [Title, setTitle] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <TitleContainer>
        <Label>제목</Label>
        <TitleInput placeholder="제목을 입력하세요" onChange={onChangeTitle} value={Title} />
      </TitleContainer>
    </div>
  );
}

export default TitleComponent;


//연락 방법 체크란
import React, { useState } from 'react';
import styled from 'styled-components';

const Container2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label2 = styled.p`
  margin-left: 5px;
  margin-right: 15px;
  white-space: nowrap;
  font-size: 20px; /* Adjust font size as needed */
`;

const RadioContainer = styled.div`
  /* Add any additional styling for the radio container */
`;

const Contact = () => {
  const [RadioValue, setRadioValue] = useState('');
  const radioarr = [
    { value: 1, label: '위탁 장소에 문의' },
    { value: 2, label: '오픈 채팅방' },
    { value: 3, label: '기타' },
    // Add more options as needed
  ];

  const handleRadio = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <Container2>
      <Label2>연락 방법</Label2>
      <RadioContainer className="Radio">
        {radioarr.map((section) => (
          <div className="radio_button" key={section.value}>
            <input
              type="radio"
              value={section.label}
              onChange={handleRadio}
              checked={RadioValue === section.label}
            />
            <SharedLabelStyle>{section.label}</SharedLabelStyle>
          </div>
        ))}
      </RadioContainer>
    </Container2>
  );
};

export default Contact;



import React from 'react';
import TitleComponent from './TitleComponent'; 
import Contact from './Contact'; 

const Container = styled.div`
  margin-bottom: 40px;
`;

const ParentComponent = () => {
  return (
    <Container>
      <TitleComponent />
      <Contact />
    </Container>
  );
}

export default ParentComponent;


