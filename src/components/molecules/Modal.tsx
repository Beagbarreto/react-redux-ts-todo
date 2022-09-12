import React from 'react';
// 3RD PARTY
import styled from 'styled-components';
// COMPONENTS
import Form from '../templates/Form/Form.tsx';

interface ModalProps {
  children: any;
  onClickAction: any;
  openModal: boolean;
  setOpenModal: boolean;
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 100:
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  background: #F9F9F9;
  width: 90%;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
  margin: 0 auto;
  min-height: 500;
  max-height: 90vh;
  border-radius: 12px;
`;

const CrossContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
	justify-content: flex-end;
  right: 0px;
  top: 10px;
  padding: 0.5em;
  curson: pointer;
`;

const Close = styled.p`
  color: #999999;
  font-size: 2rem;
  &:hover {
		color: #EBECEF;
	}
`;

const Modal = ({
children,
onClickAction, 
openModal,
setOpenModal}:ModalProps) => {

  return(
    openModal &&
      <Wrapper>
      <ModalContainer>
        <CrossContainer
          role="button"
          onClick={() => setOpenModal(false)}
        >
          <Close>
            X
          </Close>
        </CrossContainer>
        <div>
          <Form />
        </div>
      </ModalContainer>
    </Wrapper>
  );
};

export default Modal;

// import React, { useEffect, useState } from 'react';
// import { v4 as uuid } from 'uuid';;
// import { AnimatePresence, motion } from 'framer-motion';
// import toast from 'react-hot-toast';
