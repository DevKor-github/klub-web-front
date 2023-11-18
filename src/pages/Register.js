import styled from "styled-components";

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
  margin: 0 auto;
  margin-top: -150px;
`

const Title = styled.h1`
  font-size: 40px; 
  margin: 20px auto;
`

const Box = styled.div`
  width: 300px;
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Email = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  box-sizing: border-box;
`

const Password = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  box-sizing: border-box;
`

const Name = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  box-sizing: border-box;
`

const Button = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin: 10px 0;
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

const Register = () => {
  return (
    <Background>
      <Container>
        <Title>회원가입</Title>
        <Box>
          <Email type='email' placeholder='(학교) 이메일*'/>
          <Password type='password' placeholder='비밀번호*'/>
          <Password type='password' placeholder='비밀번호 확인*'/>
          <Name type='text' placeholder='닉네임*'/>
          <Button>회원가입</Button>
        </Box>
      </Container>
    </Background>
  )
}

export default Register;