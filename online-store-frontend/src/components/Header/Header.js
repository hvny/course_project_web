import { Link } from "react-router-dom";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuIcon from '@mui/icons-material/Menu';

import Navigation from "./Navigation/Navigation";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header(props) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isButtonsListActive, setIsButtonsListActive] = useState(false);

    function handleMenulick() {
        setIsButtonsListActive(!isButtonsListActive);
    } 

    function handleCartClick() {
        setIsCartOpen(!isCartOpen);
    }


    //  onClick={handleMenulick}

    // open={isButtonsListActive}
    //  onClick={handleMenulick}
    // onClose={handleMenulick}
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo-link"><img src={logo} className="header__logo" alt="Логотип компании"/></Link>
                <div className="header__content">
                    <Navigation />
                    <div className="header__phone-container">
                        <LocalPhoneIcon size="large" />
                        <p className="header__phone-number">8 800 770-71-18</p>    
                    </div>
                    <HeaderButtons isCartOpen={isCartOpen} handleCartClick={handleCartClick}  />
                </div>
                
                {/* <IconButton  
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined} 
                    aria-label="Menu" 
                    style={{color: "#ffffff"}} 
                    className="header__button_menu"
                    >
                    <MenuIcon />
                </IconButton>
                <Menu 
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    className="header__buttons-menu"
                >
                    <MenuItem className="header__menu-item"><Navigation /></MenuItem>
                    <MenuItem className="header__menu-item"><HeaderButtons isCartOpen={isCartOpen} handleCartClick={handleCartClick} /></MenuItem>
                </Menu> */}
                <IconButton aria-label="Menu" className="header__button_menu" onClick={handleMenulick}>
                    <MenuIcon />
                </IconButton>
            </div>
            
        </header>
    );
}

export default Header;