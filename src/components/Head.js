import styled from "styled-components";
// js 파일 안에서 css를 처리
import { NavLink } from "react-router-dom";
// NavLink: 사용자가 클릭할 수 있는 링크 생성
import { Outlet } from "react-router-dom";
// Outlet: 부모 라우트에서 중첩될 자식들이 렌더링될 위치
// App.js 참고 -> Head 컴포넌트(부모) - Home, NewText 컴포넌트(자식)

const HeadBlock = styled.div`
  display: flex;
  padding: 1.2rem;
  width: 1180px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1180px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const LostKU = styled(NavLink)`
  font-size: 2rem;
  font-family: 'Pretendard-Bold', sans-serif;
  cursor: pointer;
  white-space: pure;
  text-decoration: none;
  color: inherit;

  &:hover{
    color: rgb(134, 38, 51);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 30px;
`;

const Newtext = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  white-space: pure;
  text-decoration: none;
  color: inherit;

  &:hover{
    color: rgb(134, 38, 51);
  }
`;

const Login = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  white-space: pure;
  text-decoration: none;
  color: inherit;

  &:hover{
    color: rgb(134, 38, 51);
  }
`;
// 여기까지가 style에 대한 부분! 

const Head = () => {
  return(
    <div>
      <header>
        <HeadBlock>
          <LostKU to='/'>로스트KU</LostKU>
          <StyledDiv>
            <Newtext to='/newtext'>새 글 쓰기</Newtext>
            <Login to='/login'>로그인</Login>
          </StyledDiv>
        </HeadBlock>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};


export default Head;