import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css';
import Header from "./Header";

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
                <div key={i} style={{width:250}} className="itemContainer">
                    <div className="image">
                    <img src={image} alt={title} width={150} />
                    </div>
                    <div className="text">
                        <p style={{fontSize:'1rem'}}>{title}</p>
                        <p style={{fontSize:'1.2rem'}}>{`$${price}`}</p>
                    </div>
                    <div className="addCart">
                            <button className="add" onClick={()=>addtoCart([title,image,price])}>Add to cart</button>         
                    </div>
                </div>
            ))}

            </div>
        </div>
    )
}
export default Home;