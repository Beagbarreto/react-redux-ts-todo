import React from 'react';
import styled from 'styled-components';

interface CardProps {
  bg?: keyof typeof theme.colors;
  children: any;
};

const CardContainer = styled.div<CardProps>`
   diplay: flex;
   justify-content: 'flex-start';
   margin: .83rem;
   padding: .5rem;
   height: 12em;
   overflow: hidden;
   border-radius: .37rem;
   box-shadow: 0px 3px 2px rgb(67,237,63);
   background-color: ${({bg, theme: {colors}}) => bg ? colors.dueDatePink : '#FFFFFF'};
   font-size: 12px;
`;


const Card = ({ bg, children }: CardProps) => {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  );
};

export default Card;
