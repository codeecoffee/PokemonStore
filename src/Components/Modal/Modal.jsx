import React from 'react'
import { Modal,Button } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
          Obrigado!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Voce ganhou de volta: R$ {props.total}<br/></h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Reiniciar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal