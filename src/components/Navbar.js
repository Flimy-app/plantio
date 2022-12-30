import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { Button } from "./Button";
import './Navbar.css';


function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    
    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     }else{
    //         setButton(true);
    //     }
    // };

    // useEffect(()=> {
    //     showButton();
    // }, []);

    // window.addEventListener('resize', showButton)
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
            <div className="menu-icon" onClick={handleClick}>
                    <img src={require("../images/logoplanty.png")} height="35px" width="35px"/>
                </div>
                <Link to="/" className="navbar-logo">
                    PLANTIO
                </Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Beranda
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Daftar' className='nav-links' onClick={closeMobileMenu}>
                            Daftar Tanaman
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/DaftarPert' className='nav-links' onClick={closeMobileMenu}>
                            Daftar Pertanyaan
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Chatbot' className='nav-links' onClick={closeMobileMenu}>
                            Chatbot
                        </Link>
                    </li>
                
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
            </div>
        </nav>
        </>
    )
}

export default Navbar