import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {info} from "./data/products";
import './styles.css';


function BasicExample() {
  return (
    <Container className="cardContainer">
    {info.map(card =>
        <Card key={card.id} className="card">
      <Card.Img variant="top" src={card.img} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
         {card.price}
        </Card.Text>
        <Button className="btn" variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
        
    )}
    
    </Container>
  );
}

export default BasicExample;