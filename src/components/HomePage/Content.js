import Navbar from "./Navbar"
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {info} from "./data/products";
import "./main.css"


function BasicExample(props) {
    return (
      <>
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
          <Button className="btn" variant="primary" onClick={() => props.onClick(card)}>Add to Cart</Button>
        </Card.Body>
      </Card>
          
      )}
      
      </Container>
      </>
    );
  
}

export default BasicExample;