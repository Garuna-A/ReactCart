import './header.css';

const Cart = ({item,addToCart, removeFromCart})=>{
    console.log(item);
    const groupedItems = {};

    item.forEach(([title,image,price])=>{
        if(groupedItems[title]){
            groupedItems[title].quantity+=1;
        }
        else{
            groupedItems[title] = {
                title,image,price,quantity:1,
            }
        }
    });

    const uniqueItems = Object.values(groupedItems);

    if(item.length===0){
        return(
            <div style={{  width:'100vw' ,minHeight: '100vh', textAlign: 'center'}} className='cartContent'>
                <h2>Your cart is empty</h2>
                <p style={{fontSize:'1.2rem'}}>Click on ReactCart to start shopping</p>
            </div>
        )
    }
    else{

        return(
    
        <div style={{minHeight:'100vh'}}>
    
            <h1 style={{marginLeft:'2rem'}}>Cart:</h1>
            {uniqueItems.map(({title,image,price,quantity},i)=>(
                <div className="cartItem" key={i} >
                    <div className="image-container" width={200}>
    
                        <img src={image} alt={title} width={100}/>
                    </div>
                    <div className="text-cart">
                        <p style={{fontSize:'1.2rem'}}>{title}</p>
                        <p style={{fontSize:'1.2rem'}}>{price}</p>
                        <div className="quantity">
                            <button id='addItems' onClick={()=>addToCart([title,image,price])}>+</button>
                            <p style={{fontSize:'1.2rem'}}>{quantity}</p>
                            <button id='removeItems' onClick={() => removeFromCart([title, image, price])}>-</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        )
    }
}
export default Cart;