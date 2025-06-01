import './header.css';
import { Link } from 'react-router-dom';

const Header = ({cartItemCount}) =>{
    return(
        <div className="header">
            
            <Link to='/' style={{fontSize:'4rem', color:'#35A7FF'} } className='headerh1'>ReactCart</Link>
            <Link to={'cart'}>
            <button style={{fontSize:'1.5rem', width:200, marginRight:'2rem'} }className="cartButton">🛒Cart: {cartItemCount}</button>
            </Link>
        </div>
    )
}
export default Header