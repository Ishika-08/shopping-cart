import Card from 'react-bootstrap/Card';
import Navbar from "../HomePage/Navbar"
import "./Cart.css"

export default function Cart({cartItems, Increase, Decrease}){
    // const price = 0;

    return (
        <>
            <Navbar/>
            <h1 className="heading">Cart Items</h1>

            {cartItems.length === 0 && <div className="empty">No items are added to the cart</div>}

            <div className="productContainer">

                {cartItems.map(item =>
                <Card key={item.id}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {parseInt(item.price)*item.quantity}
                    </Card.Text>
                    <div>Quantity: <br/><br/>
                        <div className="quantity">
                        <button onClick={()=> Decrease(item)}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={()=> Increase(item)}>+</button>
                        </div>
                    </div>
                    <button className="btn">Remove</button>

                    </Card.Body>
                </Card>)}

                <Card>
                    <Card.Body>
                        <Card.Title>Total:</Card.Title>
                        {/* <Card.Text>{cartItems.map(element => price+ parseInt(element.price))}</Card.Text> */}
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

{/* <img src={item.img}/>
                    <h1>{item.title}</h1>
                    <h1>{item.price}</h1>
                    <p>{item.quantity}</p> */}