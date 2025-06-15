import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importa componentes de react-bootstrap

export default function Modal1(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        PRECIO DANZA TOBAS
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PRECIO DANZA TOBAS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          precio:350 Bs
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}