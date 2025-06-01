import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/home'
function App() {

  const[cartItemCount,setCartItemCount] = useState(0);
  const addtoCart = ()=>{
    setCartItemCount(prev=>prev+1);
  };

  return(
    <div>
      <Header cartItemCount={cartItemCount}/>
      <Home addtoCart={addtoCart}/>
    </div>
  )
}

export default App
