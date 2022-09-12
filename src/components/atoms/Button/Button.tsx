import React from 'react';
// 3RD PARTY
import styled from 'styled-components';

interface ButtonProps {
  children: string;
  type?: string;
};

const ButtonContainer = styled.button`
  display: inline-block;
  height: auto;
  width: 175px;
  align-items: center;
  justify-content: center;
  background-color: #43ED3F;
  color: #FFFFFF;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border-radius: .15rem;
  overflow: hidden;
  border: none;
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`;

const Button = ({ children, type="button" }: ButtonProps) => {
  return (
    <ButtonContainer type={type}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
