import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  margin: 5px 0;
`;

const Button = styled.button`
  height: 40px;
  margin: 5px 0;
`;


const LogIn = () => {
  return (
    <StyledDiv>
      <FormDiv>
        <Input type="email" placeholder="이메일"  />
        <Input type="password" placeholder="비밀번호"  />
        <Button>
          로그인
        </Button>
      </FormDiv>
    </StyledDiv>
  );
};

export default LogIn;

// 로그인 페이지 렌더링