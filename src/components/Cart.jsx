import './header.css';

const Cart = ({item})=>{
    console.log(item);
    return(

    <div>

        <h1>Cart:</h1>
        {item.map(([title,image,price],i)=>(
            <div className="cartItem" key={i} >
                <div className="image-container" width={200}>

                    <img src={image} alt={title} width={100}/>
                </div>
                <div className="text-cart">
                    <p style={{fontSize:'1.2rem'}}>{title}</p>
                    <p style={{fontSize:'1.2rem'}}>{price}</p>
                </div>
            </div>
        ))}
    </div>
    )
}
export default Cart;