import React from 'react';
// 3RD PARTY
import styled from 'styled-components';

const SelectContainer = styled.select `
  width: 100%;
  padding: 1em;
  margin-top: 0.5em;
  margin-bottom: 1em;
  background-color: #FFFFFF;
  border: none;
  font-size: 1em;
`;

const SelectInput = ({ children, id, ...rest }) => {
  return (
    <SelectContainer id={id} {...rest}>
      {children}
    </SelectContainer>
  );
}

export default SelectInput;