import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Shop</a>
                <a href="/order">Orders</a>
                <a href="/order">Inventory</a>
                <a href="/order">About</a>
            </div>
        </nav>
    );
};

export default Header;