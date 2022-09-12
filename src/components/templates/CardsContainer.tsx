import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// COMPONENTS
import Button from '../atoms/Button/Button.tsx';
import Card from '../atoms/Card/Card.tsx';
import Modal from '../molecules/Modal';

const SAMPLE_DATA = [
    {
      id: 0,
      pendingItem: 'pending item for test',
      status: 'pending',
    },
    {
      id: 1,
      pendingItem: 'pending item for test',
      status: 'pending',
    },
    {
      id: 2,
      pendingItem: 'pending item for test',
      status: 'done',
    },
    {
      id: 3,
      pendingItem: 'pending item for test',
      status: 'pending',
    },
    {
      id: 4,
      pendingItem: 'pending item for test',
      status: 'pending',
    },
    {
      id: 5,
      pendingItem: 'pending item for test',
      status: 'pending',
    },
    {
      id: 6,
      pendingItem: 'pending item for test',
      status: 'pending',
    },
    {
      id: 7,
      pendingItem: 'pending item for test',
      status: 'pending',
    },
    {
      id: 8,
      pendingItem: 'pending item for test',
      status: 'pending',
    },
  ];

  const BoxContainer = styled.div`
    align-items: center;
    justify-content: center;
    border-radius: 0.5em;
    padding: 15px 15px 15px 15px;
    margin: 1em;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(1, 42, 88, 0.23);
  `
  const Grid = styled.div`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-content: center;
      width: 100%;
      padding: 0.5em;
      gap: 0.2em;
  `;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const AddPendTxt = styled.p`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.2em 0.2em;
`;

const CardsContainer = ({ children }: CardProps) => {
  const [ openModal, setOpenModal ] = useState<boolean>(false);

  return (
      <BoxContainer>
        <Grid>
          <Card>
            <h3>Forgot something?</h3>
            <Button 
              onClick={() => setOpenModal(true)}>
              <AddPendTxt>
                ADD NEW PENDING!
              </AddPendTxt>
            </Button>
          </Card>
          {SAMPLE_DATA.map(
            (item) =>
                <Card>
                  <p>{item.status}</p>
                  <ButtonsBox>
                    <button>Delete</button>
                    <button>Done</button>
                  </ButtonsBox>
                </Card>
          )}
        </Grid>
        <Modal openModal={openModal} setOpenModal={setOpenModal}/>

      </BoxContainer>
  );
};

export default CardsContainer;