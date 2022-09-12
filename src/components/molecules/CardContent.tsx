import React from 'react';
import styled from 'styled-components';

interface CardProps {
  pendingInf: any;
};

const CardContainer = styled.div<CardProps>`
   diplay: flex;
   justify-content: 'flex-start';
   margin: 2px;
   padding: .5px 5px;
   width: 5.5em;
   height: 12em;
   overflow: hidden;
   color: {(theme: {colors}) => colors.darkGray};
`;


const CardContent = ({ pendingInf }: CardProps) => {
  return (
    <CardContainer>
      {priority}
      {pendingInf}
      {pendingStatus}
      {date}
    </CardContainer>
  );
};

export default CardContent;
