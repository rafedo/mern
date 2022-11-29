import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col, Button, Modal } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import EditCoba from "./EditCoba";

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column">
        <Container>
          <Row>
            <Col>
              <AddProduct show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
          </Row>
          <Row className="my-3">
            {products.map((product, index) => (
              <Col md={3} className="my-2">
                <Card>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {product.category}
                    </Card.Subtitle>
                    <Card.Text>
                      <NumericFormat
                        displayType="text"
                        value={product.price}
                        allowLeadingZeros
                        thousandSeparator=","
                        prefix={"IDR. "}
                      />
                    </Card.Text>
                    <Card.Text> Stock tersisa {product.stock} pcs</Card.Text>
                    <Link
                      to={`edit/${product._id}`}
                      className="button is-info is-small mr-1"
                    >
                      Edit
                    </Link>
                    <EditCoba
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      id={product._id}
                    />
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="button is-danger is-small"
                    >
                      Delete
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductList;
