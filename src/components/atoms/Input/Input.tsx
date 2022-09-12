import React, { useState } from 'react';
// 3rd PARTY
import styled from 'styled-components';

interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: any;
}

type Props = {
  placeholder: string;
  label?: string;
  id: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
	font-size: 12px;
	color: palevioletred;
`;

const InputStyle = styled.input`
  overflow: hidden;
  &::placeholder{
    color: lightgray;
  }
  &:focus {
    outline: none;
  }
`;

const Input: React.FC<InputProps & Props> = (props) => {
  const { placeholder, label, value, type, name, id } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const focused = () => {
    setIsFocused(true);
  }

  const blurred = () => {
    setIsFocused(false);
  }

  return(
    <Wrapper>
      {label && label !== '' &&
        <Label>{label}</Label>
      }
      <InputStyle
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onFocus={focused}
        onBlur={blurred}
        value={value}
      >
      </InputStyle>
    </Wrapper>
  )
}

export default Input;