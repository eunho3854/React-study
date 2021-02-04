import React from 'react';
import styled from 'styled-components';

const StyledTopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 300px;
  text-align: center;
`;

const Top = (props) => {
  const { number } = props;

  return (
    <div>
      <StyledTopDiv>번호 : {number} </StyledTopDiv>
    </div>
  );
};

export default Top;
