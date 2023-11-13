import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  font-size: 150px;
  font-weight: 700;
`;

const NewText = () => {
  return (
    <StyledDiv>
      새 글 쓰기
    </StyledDiv>
  );
};

export default NewText;

// 새 글 쓰기 페이지 렌더링