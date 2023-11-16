import Map from '../components/Map.js';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Background = styled.div`
  width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const Category = styled.div`
  margin: 10px 50px;
`
const CategoryTitle = styled.h1`
  font-weight: 700;
  text-align: center;
  margin: 25px;
`

const Box = styled.div`
  height: 120px;
  width: 400px;
  background-color: #E2E2E2;
  border-radius: 30px;
  margin: 10px;
`;

const Home = () => {
  return (
    <Div>
      <Map />
      <Background>
        <Category>
          <CategoryTitle>주인 찾아요</CategoryTitle>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Category>
        <Category>
          <CategoryTitle>물건 찾아요</CategoryTitle>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Category>
      </Background>
    </Div>
  );
};

export default Home;

//메인페이지 렌더링