import {useState} from "react";
import './App.css';
import Content from "./components/HomePage/Content";
import Cart from "./components/Cart/Cart"
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  const[cartItem, setCartItem] = useState([]);

  function handleClick(card){

    setCartItem(prev => {
      const itemExists = prev.find(element => element.id === card.id);
      if(itemExists){
        alert("Item already exists in the cart")
        return [...prev]
      }
      else{
        return [...prev, {...card, quantity:1}]
      }
    })
  }

  function handleIncrease(data){
    setCartItem(prev =>{
      return prev.map( element => {
        if(element.id === data.id){
          return {...element, quantity: element.quantity + 1}
        }
        else{
          return {...element}
        }
      }
      )
    }
    )
  }

  function handleDecrease(data){
    setCartItem(prev =>{
      return prev.map( element => {
        if(element.id === data.id && element.quantity !== 1){
          return {...element, quantity: element.quantity - 1}
        }
        else{
          return {...element}
        }
      }
      )
    }
    )
  }

  function handleClearCart(){
    setCartItem([]);
  }

  function handleRemoveProduct(data){
    const RemovedItemIndex = cartItem.filter(element => {
      if(element.id === data.id){
        return (parseInt(element.id))
      }  
    })
    setCartItem(cartItem.splice(RemovedItemIndex,1))

  }



  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content onClick={handleClick}/>}/>
        <Route 
        path="/cart" 
        element=
        {
          <Cart 
          cartItems={cartItem} 
          onClick={handleClick} 
          Increase={handleIncrease} 
          Decrease={handleDecrease} 
          RemoveProduct={handleRemoveProduct}
          ClearCart = {handleClearCart}
          />
        }
        />
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
