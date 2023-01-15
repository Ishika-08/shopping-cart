import Navbar from "../HomePage/Navbar"

export default function Cart({cartItems}){
    console.log(cartItems);

    return (
        <>
            <Navbar/>
            <h1>Cart Items</h1>


            {cartItems.length === 0 && <div>No items are added to the cart</div>}

            <div>
                {cartItems.map(item => <div key={item.id}>
                    <img src={item.img}/>
                    <h1>{item.title}</h1>
                    <h1>{item.price}</h1>
                </div>)}
            </div>
        </>
    )
}