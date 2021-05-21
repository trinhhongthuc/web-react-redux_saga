import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import product1 from "../img/product_01.jpg";
import product2 from "../img/product_02.jpg";
import product3 from "../img/product_03.jpg";
import product4 from "../img/product_04.jpg";
import product5 from "../img/product_05.jpg";

const BoxItemProduct = ({ data }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={product1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{data.NameProduct}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            $ {data.price}
          </CardSubtitle>
          <CardText>{data.description}</CardText>
          <Button>Buy Now</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BoxItemProduct;
