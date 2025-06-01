import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/home'
import Cart from './components/Cart'
function App() {
  const [cart,setCart] = useState([]);
  const[cartItemCount,setCartItemCount] = useState(0);
  const addtoCart = (product)=>{
    setCartItemCount(prev=>prev+1);
    setCart(prev=>[...prev,product]);
  };

  return(
    <div>
      <Header cartItemCount={cartItemCount}/>
      <Routes>
        <Route path='/' element={<Home addtoCart={addtoCart}/>} />
        <Route path = 'cart' element = {<Cart item={cart}/>} />
      </Routes>
    </div>
  )
}

export default App
