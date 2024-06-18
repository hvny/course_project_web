import "./Header.css";
import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

import Navigation from "./Navigation/Navigation";
import HeaderButtons from "./HeaderButtons/HeaderButtons";


function Header({tempCartItems, handleOpenAuthPopup}) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    function handleCartClick() {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo-link">
                    <img 
                        src={logo} 
                        alt="Логотип компании"
                        title="Логотип пекарни"
                        aria-label="Логотип пекарни, по нажатию ведёт на страницу с меню"
                        className="header__logo" 
                    />
                </Link>
                <div className="header__content">
                    <Navigation />
                    <HeaderButtons isCartOpen={isCartOpen} handleCartClick={handleCartClick} tempCartItems={tempCartItems} handleOpenAuthPopup={handleOpenAuthPopup} />
                </div>
            </div>
        </header>
    );
}

export default Header;