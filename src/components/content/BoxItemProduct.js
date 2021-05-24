import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
const BoxItemProduct = ({ data }) => {
  return (
    <div>
      <Card className="card-box">
        <Link to={`/product/${data._id}`}>
          <CardImg top width="100%" src={data.img} alt="Card image cap" />
        </Link>
        <CardBody>
          <CardTitle tag="h3">{data.title}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">
            $ {data.price}
          </CardSubtitle>
          <CardText className="product-description">
            {data.description}
          </CardText>
          <Button className="button-buy">Buy Now</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BoxItemProduct;
