import React from 'react';
import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import { FaCat } from "react-icons/fa";
import { GiCat } from "react-icons/gi";


const ModalWrapper = styled.div`
  width: 80%;
  height: 40%;
  background-color: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  position: absolute;
  top: 30%;
  z-index: 9999;
  border-radius: 10px;
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    margin: 20px;
    background: #326295;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
      background-color: #fff;
      color: #326295;
    }

    &:focus {
      outline: none;
    }
  }
`;

const Modal = ({ showModal, setShowModal, addCat1, addCat2 }) => {
    return (
        <>
            {showModal ? (

                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                        <h1>Dodaj koty</h1>
                        <p>Dodaj przykłądowe koordynaty kotków :)</p>
                        <button onClick={addCat1}>
                            <FaCat/> Dodaj Mruczka
                        </button>
                        <button onClick={addCat2}>
                            <GiCat/> Dodaj Ciapka
                        </button>
                    </ModalContent>
                    <CloseModalButton
                        aria-label='Close modal'
                        onClick={() => setShowModal(prev => !prev)}
                    />
                </ModalWrapper>

            ) : null}

        </>
    );
};

export default Modal;