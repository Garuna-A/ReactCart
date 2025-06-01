import { useEffect, useState } from "react";
import './home.css';

const Home = () =>{
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
                <button key={i} style={{width:300}}>
                    <div className="image">

                    <img src={image} alt={title} width={200} />
                    </div>
                    <p style={{fontSize:'1rem'}}>{title}</p>
                    <p style={{fontSize:'1.2rem'}}>{`$${price}`}</p>
                    <button className="add">Add to cart</button>
                </button>
            ))}

            </div>
        </div>
    )
}
export default Home;