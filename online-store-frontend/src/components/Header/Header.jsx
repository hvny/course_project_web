import "./Header.css";
import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

import Navigation from "./Navigation/Navigation";
import HeaderButtons from "./HeaderButtons/HeaderButtons";


function Header(props) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    function handleCartClick() {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo-link"><img src={logo} className="header__logo" alt="Логотип компании"/></Link>

                <div className="header__content">
                    <Navigation />
                    {/* <div className="header__phone-container">
                        <LocalPhoneIcon size="large" />
                        <p className="header__phone-number">8 800 770-71-18</p>    
                    </div> */}
                    <HeaderButtons isCartOpen={isCartOpen} handleCartClick={handleCartClick}  />
                </div>
            </div>
        </header>
    );
}

export default Header;