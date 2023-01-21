import React from 'react'
import Navbar from "./Navbar"
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "./data/products";
import "./main.css"

function BasicExample(props) {
  const [info,setInfo]=React.useState(data)
  const [addedToCart, setAddedToCart] = React.useState(null);

  function handleClick(card){
    setAddedToCart(card.id);
  }

  return (
    <>
    <div>
    <Navbar/>
    <Container className="cardContainer">
    {info.map(card =>
        <Card key={card.id}>
      <Card.Img variant="top" src={card.img} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
        ${card.price}
        </Card.Text>
        <Button className="btn" variant="primary" onClick={() => {
          props.onClick(card); 
          handleClick(card);
        }}>
          {addedToCart === card.id ? "added to cart" : "add to cart"}
        </Button>
      </Card.Body>
    </Card>
        
    )}
    
    </Container>
    </div>
    </>
  );
}

export default BasicExample;

