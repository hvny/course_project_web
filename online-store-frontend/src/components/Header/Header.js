import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import logo from "../../images/logo.svg";


function Header(props) {
    return (
        <header className="header">
            <Link to="/" className="header__logo-link"><img src={logo} className="header__logo" /></Link>
            <Navigation />
            <p className="header__phone-number">8 800 770-71-18</p>    
            <div className="header__buttons">
                <IconButton aria-label="ShoppingBagOutlined" size="large" className="header__button_cart" style={{backgroundColor: "#ffffff", marginRight: "20px"}}>
                    <ShoppingBagOutlinedIcon className="header__icon_cart" size="large" />
                </IconButton>
                <IconButton aria-label="Login" size="large" className="header__button_login" style={{borderRadius: "15px", backgroundColor: "#663334", padding: "4px 5px"}}>
                    <span className="header__span">Войти</span>
                    <LoginIcon className="header__icon_login" />
                </IconButton>
            </div>
        </header>
    );
}

export default Header;