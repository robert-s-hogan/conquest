import React, { useState } from "react";

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <dialog open onClose={closeModal}>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <button onClick={closeModal}>Close</button>
        </dialog>
      )}
    </>
  );
}

export default Modal;
