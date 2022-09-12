import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
// 3RD Party
import styled from 'styled-components';
// COMPONENTS
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import SelectInput from '../../atoms/Input/SelectInput';

interface FormProps {
  type: string,
  modalOpen: boolean,
  setModalOpen: boolean,
  pendingItem: any;
}

const Form = ({type, modalOpen, setModalOpen, pendingItem}: FormProps) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<string>('')
  const [status, setStatus] = useState<string>('incomplete');


const ButtonContainer = styled(Button) `
  display: flx;
  margin-top: 1em;
  font-size: 1rem;
  font-weight: 600;
  padding: 5px 5px;
`;

const FormDetail = styled.form`
  display: block;
  justify-content: flex-start;
	width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 2rem;
`;

const Label = styled.label`
	font-size: 12px;
	color: palevioletred;
`;

  return (
    <>
    <FormDetail>
      <Title>Add Pending</Title>
      <Label htmlFor="description">
        Pending description
      </Label>
      <Input
        type="text"
        id="description"
        placeholder="Pending description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
        <Label htmlFor="priority">
        Priority
        </Label>
        <Input
        type="text"
        id="priority"
        placeholder="Pending priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
        <Label htmlFor="status">
          Status
        </Label>
        <SelectInput
          id="status"
          value="status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="status">Select status</option>
          <option value="active">Incomplete</option>
          <option value="done">Done</option>
          <option value="deleted">Deleted</option>
      </SelectInput>
      <ButtonContainer
        type="submit">
        Create new pending
      </ButtonContainer>
    </FormDetail>
    </>
  );
};

export default Form;
