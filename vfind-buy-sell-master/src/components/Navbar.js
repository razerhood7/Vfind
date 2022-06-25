import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import {Icon} from 'react-icons-kit'
import {auth} from '../config/Config'
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'

export const Navbar = ({user,totalProducts}) => {

    const history = useHistory();

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            history.push('/login');
        })
    }
    return (
        
        <div className='navbar'>
            <div className='leftside'> 
            <div className='logo'>
             <img src={logo} alt="VFind."/>
             </div>
             </div>
            <div className='rightside'> 
            {!user&&<>
                <div><Link to='signup' className='navlinks'>SIGN UP</Link></div>
                <div><Link to='login' className='navlinks'>  LOGIN</Link></div>
            </>}
            {user&&<>
                    <div><Link className='navlink' to="/">Hello, {user} !</Link></div>
                    <div><Link className='navlink2' to="/add-products">Sell Products </Link></div>
                    <div className='cart-menu-btn'>
                        <Link className='navlink' to="/cart">
                        <Icon icon={shoppingCart} size={20}/>
                        </Link>
                        <span className='cart-indicator'>{totalProducts}</span> 
                    </div>
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>LOGOUT</div>
                    
                </>}                     

            </div>
        </div>
    )
}
