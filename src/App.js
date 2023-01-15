import {useState} from "react";
import './App.css';
import Content from "./components/HomePage/Content";
import Cart from "./components/Cart/Cart"
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  const[cartItem, setCartItem] = useState([]);

  function handleClick(card){

    setCartItem(prev => {
      return [...prev, {...card}]});
    // setCartItem(prev=>{
    //   let prevValue = prev;
    //   prevValue.push(card);
    // })
    console.log(cartItem)
    console.log(card);
  }


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content onClick={handleClick}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItem} onClick={handleClick}/>}/>
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
