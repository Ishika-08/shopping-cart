import Card from 'react-bootstrap/Card';
import Navbar from "../HomePage/Navbar"
import "./Cart.css"

export default function Cart({cartItems, Increase, Decrease, RemoveProduct, ClearCart}){
    const totalPrice= cartItems.reduce((price, item) => price + item.quantity * item.price,0)

    return (
        <>
            <Navbar/>
            <h1 className="heading">Cart Items</h1>

            {cartItems.length === 0 && <div className="empty">No items are added to the cart</div>}

        <div className="price-and-clear">
            <Card className="total-card">
                    <Card.Body>
                        <Card.Title>Total:    ${totalPrice}</Card.Title>
                    </Card.Body>
            </Card>

            {cartItems.length >= 1 && <button className="clear-button" onClick={ClearCart}>Clear Cart</button>}
        </div>


            <div className="productContainer">
                {cartItems.map(item =>
                <Card key={item.id}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        ${parseInt(item.price)*item.quantity}
                    </Card.Text>
                    <div>Quantity: <br/><br/>
                        <div className="quantity">
                        <button onClick={()=> Decrease(item)}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={()=> Increase(item)}>+</button>
                        </div>
                    </div>
                    <button className="btn" onClick={() => RemoveProduct(item)}>Remove</button>

                    </Card.Body>
                </Card>)}
            </div>
        </>
    )
}

