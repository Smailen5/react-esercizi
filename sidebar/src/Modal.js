import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  // console.log(isModalOpen)
  return (
    <Wrapper className={isModalOpen ? "show-modal" : "modal"}>
      <section className={`modal ${isModalOpen? 'show-modal-overlay': ''}`}>
        <div className="modal-content">
          <h5>Contenuto del modal</h5>
        </div>
        <button onClick={closeModal} className="btn btn-delete btn-modal">
          <AiFillCloseCircle className="nav-icon" />
        </button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: var(--transition);
  opacity: 0;
  visibility: hidden;
  z-index: 5;
  .modal {
    position: relative;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    height: 150px;
    width: 250px;
    background-color: white;
    border-radius: var(--radius);
    display: grid;
    place-items: center;
    transition: var(--transition);
    opacity: 0;
    visibility: hidden;
    .btn-modal {
      position: absolute;
      padding: 1rem;
      top: 1%;
      right: 1%;
    }
  }
`;

export default Modal;
