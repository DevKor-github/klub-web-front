import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Welcome = styled.h1`
  font-size: 40px; 
`

const Box = styled.div`
  width: 300px;
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Email = styled.input`
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  padding-left: 10px;
  margin: 5px;
  font-size: 16px;
`

const Password = styled.input`
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  padding-left: 10px;
  margin: 5px;
  font-size: 16px;
`

const Find = styled.p`
  color: #909090;
  margin: 5px 5px;
`

const Button = styled.button`
  height: 40px;
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  font-size: 16px;
  text-align: center;
  background-color: rgb(134, 38, 51);
  color: white;
  font-family: 'Pretendard-SemiBold', sans-serif;

  &:hover {
    color: black;
    background-color: #E2E2E2;
    border: 1px solid #ccc;
  }
`

const Register = styled(NavLink)`
  color: rgb(134, 38, 51);
  text-decoration: none;
  margin: 10px;
  text-align: center;

  &:hover {
    color: black;
  }
`

const LogIn = () => {
  return (
    <Background>
      <Container>
        <Welcome>로스트KU에 오신 것을 환영합니다!</Welcome>
        <Box>
          <Email type='email' placeholder='(학교) 이메일'/>
          <Password type='password' placeholder='비밀번호'/>   
          <Find>*비밀번호 찾기</Find>
          <Button>로그인</Button>
          <Register to='/register'>회원가입</Register>
        </Box>
      </Container>
    </Background>
  );
};

export default LogIn;

// 로그인 페이지 렌더링