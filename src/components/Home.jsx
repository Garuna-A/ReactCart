import { useEffect, useState } from "react";
import './home.css';

const Home = ({addtoCart}) =>{
    const[product,setProduct] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>{return response.json()})
        .then((data)=>{
            const prodInfo = [];
            data.forEach((prod)=>{

                const item = [prod.title,prod.image,prod.price];
                prodInfo.push(item);
            })
            setProduct(prodInfo);

        });
    },[]);


    return(
        <div>
            <div className="container">

            {product.map(([title,image,price],i)=>(
                <div key={i} style={{width:300}} className="itemContainer">
                    <div className="image">
                    <img src={image} alt={title} width={200} />
                    </div>
                    <div className="text">
                        <p style={{fontSize:'1rem'}}>{title}</p>
                        <p style={{fontSize:'1.2rem'}}>{`$${price}`}</p>
                    </div>
                    <div className="addCart">
                        <button className="add" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div>
            ))}

            </div>
        </div>
    )
}
export default Home;