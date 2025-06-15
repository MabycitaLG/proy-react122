import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importa componentes de react-bootstrap

export default function Modal1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        PRECIO DANZA CUECA TARIJEÑA
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PRECIO DANZA CUECA TARIJEÑA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          precio 150 Bs.
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