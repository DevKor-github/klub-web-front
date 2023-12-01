import React, { useState } from 'react';
import styled from 'styled-components';

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
    <div className="Radio">
      <p>연락 방법</p>
      {radioarr.map((section) => (
        <div className="radio_button" key={section.value}>
          <input
            type="radio"
            value={section.label}
            onChange={handleRadio}
            checked={RadioValue === section.label}
          />
          <label className="label">{section.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Contact;
