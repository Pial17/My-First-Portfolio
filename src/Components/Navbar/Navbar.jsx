import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { useRef } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState('home')
    const menuRef = useRef();
    const openMenu = ()=>{
        menuRef.current.style.right = "0";
    } 
    const closeMenu = ()=>{
        menuRef.current.style.right = "-300px";
        
    }
    return (
        <div className='navbar'>
            <AnchorLink className='anchor-link' href="#home"><img src={logo} alt=''/></AnchorLink>
            <img className='nav-mob-open' onClick={openMenu} src={menu_open}  alt=''/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' href="#hero"><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'?<hr/>:""}</li>
                <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==='about'?<hr/>:""}</li>
                <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==='services'?<hr/>:""}</li>
                <li><AnchorLink className='anchor-link' offset={50} href="#works"><p onClick={()=>setMenu('works')}>My Works</p></AnchorLink>{menu==='works'?<hr/>:""}</li>
                <li><AnchorLink className='anchor-link' offset={50} href="#contacts"><p onClick={()=>setMenu('contacts')}>Contacts</p></AnchorLink>{menu==='contacts'?<hr/>:""}</li>
            </ul>
            <div className="nav-connect">
            <AnchorLink className='anchor-link' offset={50} href="#contacts">Contact With Me</AnchorLink> 
            </div>
        </div>
    );
};

export default Navbar;