import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: #FFFFFF;
    font-family: sans-serif;
    font-size: 15px;
`;

const HeaderContainer = styled.div`
  background-color: #2B2D2F;
  text-align: center;
  height: 30px;
  width: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-right: 0.5em;
  padding-left: 0.5em;
`;

const Header = () => {
  return(
    <HeaderContainer>
      <Title>
        Pendings
      </Title>
    </HeaderContainer>
  )
};

export default Header;
