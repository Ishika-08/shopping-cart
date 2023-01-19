import React from 'react'
import Navbar from "./Navbar"
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {info} from "./data/products";
import "./main.css"


function BasicExample(props) {
  const [addToCart,setAddToCart]=React.useState("Add to Cart");
  function handleClick(item){
    //there is a bug , when you click on the button ,all of the button change there tag. Will send you an updat code on this. 
    setAddToCart("Added to Cart")
    console.log(item)
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
            handleClick(card.id);
          }}>{addToCart}</Button>
          {/* <Button className="btn" variant="primary" onClick={() => props.onClick(card) && handleClick()}>{addToCart}</Button> */}
        </Card.Body>
      </Card>
          
      )}
      
      </Container>
      </div>

      </>
    );
  
}

export default BasicExample;


