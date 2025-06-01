import './header.css';

const Header = ({cartItemCount}) =>{
    return(
        <div className="header">
            <p style={{fontSize:'3.2rem',fontWeight:500}}>ReactCart</p>
            <button style={{fontSize:'2rem'}}>🛒Cart: {cartItemCount}</button>
        </div>
    )
}
export default Header