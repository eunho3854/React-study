import { Button } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

// 스타일 상속
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
  background-color: green;
`;

const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <Button variant="primary">Primary</Button>{' '}
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <h1>홈 : {number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        번호 증가
      </button>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목 : {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
