import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal, Form, Card } from "react-bootstrap";

const DeleteProduct = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    

  const deleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/products/${props.id}`);
        handleClose();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Button className="button is-danger is-small mr-1" onClick={handleShow}>
          Delete
        </Button>
        <Modal show={show} onHide={handleClose} style={{ "z-index": "1055" }}>
          <Modal.Header closeButton>
            <Modal.Title>Hapus data</Modal.Title>
          </Modal.Header>
          <Modal.Body>Yakin Mau Menghapus data and?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={deleteProduct()}>
              Hapus Data
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default DeleteProduct;
