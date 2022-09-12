import React, { createContext, useState } from 'react';
import { Modal } from '../components/molecules/Modal';

export const ModalContext = createContext({});

const ModalContextProvider = ({ children}) => {
  const [modal, setModal] = useState(false);
  const hideModal = () => setModal(false);
  const showModal = () => setModal(true);

  return(
    <ModalContext.Provider value={{hideModal, showModal}}>
      { modal &&
        <Modal>
          {children}
        </Modal>
      }
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;