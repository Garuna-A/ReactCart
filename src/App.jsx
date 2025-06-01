  import { useState } from 'react'
  import './App.css'
  import { Routes,Route } from 'react-router-dom'
  import Header from './components/Header'
  import Home from './components/Home'
  import Cart from './components/Cart'
  function App() {
    const [cart,setCart] = useState([]);
    const[cartItemCount,setCartItemCount] = useState(0);
    const [cost,setCost] = useState(0);

    const addtoCart = (product)=>{
      setCartItemCount(prev=>prev+1);
      setCart(prev=>[...prev,product]);
      setCost(prev=>prev+product[2]);
    };

    const removeFromCart = (product) => {
      const index = cart.findIndex(
        (item) => item[0] === product[0] && item[1] === product[1] && item[2] === product[2]
      );
      if (index !== -1) {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        setCartItemCount((prev) => prev - 1);
      }
    };

    const clearCart = () =>{
      const newCart = [...cart];
      newCart.splice(0,newCart.length);
      setCart(newCart);
      setCartItemCount(0);
    }

    return(
      <div>
        <div className="header-app">
            <Header cartItemCount={cartItemCount}/>
        </div>
          <div className="page-item">

            <Routes>
              <Route path='/' element={<Home addtoCart={addtoCart}/>} />
              <Route path = 'cart' element = {<Cart item={cart} addToCart={addtoCart} removeFromCart={removeFromCart} cost={cost} clearCart={clearCart}/>} />
            </Routes>
          </div>
      </div>
    )
  }

  export default App
