import './App.css';
import MainPage from "./components/MainPage";
import Cart from "./components/Cart"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
