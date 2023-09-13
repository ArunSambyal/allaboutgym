import React from 'react';
import { Card } from 'react-bootstrap';

const ProductBox = (props) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.imageSrc} alt="img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.showDetails ? props.description : null}
        </Card.Text>
        <h6
          onClick={props.toggleDetails}
          className={`link_text ${props.showDetails ? "actives" : ""} view-details-link`}
        >
          {props.showDetails ? "Hide Details" : "View Details"}
        </h6>
      </Card.Body>
    </Card>
  );
}

export default ProductBox;
