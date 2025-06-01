import './header.css';
import { Link } from 'react-router-dom';

const Header = ({cartItemCount}) =>{
    return(
        <div className="header">
            <Link to='/'>
                <a style={{fontSize:'3.2rem',fontWeight:500}}>ReactCart</a>
            </Link>
            <Link to={'cart'}>
            <button style={{fontSize:'1.5rem', backgroundColor:'black', width:200}}>🛒Cart: {cartItemCount}</button>
            </Link>
        </div>
    )
}
export default Header