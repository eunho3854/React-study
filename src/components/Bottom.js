import React from 'react';
import styled from 'styled-components';

const StyledBottomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 300px;
  text-align: center;
`;

const Bottom = (props) => {
  const { number, setNumber } = props;

  const add = () => {
    setNumber(number + 1);
  };

  const minus = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <StyledBottomDiv>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
      </StyledBottomDiv>
    </div>
  );
};

export default Bottom;
