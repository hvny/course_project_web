import "./HeaderButtons.css";

import { 
    IconButton, 
    Drawer 
} from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { useState } from "react";
import { Link } from "react-router-dom";

import Cart from "../../Cart/Cart";


export default function HeaderButtons({ isCartOpen, handleCartClick, tempCartItems, handleOpenAuthPopup }) {
    //const token = localStorage.getItem("token");
    const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
    
    return (
        <div className="header__buttons">
            <Tooltip title="Корзина">
                <IconButton 
                    aria-label="Корзина"
                    className="header__button header__button_cart"
                    onClick={handleCartClick}
                >
                    <ShoppingBagOutlinedIcon className="header__icon_cart" />
                </IconButton>
            </Tooltip>
            <Drawer 
                open={isCartOpen}
                onClose={handleCartClick} 
                anchor="right"
            >
                <Cart handleClose={handleCartClick} tempCartItems={tempCartItems} />
            </Drawer>
            <Tooltip title="Профиль">
                {
                    localStorage.getItem("token") ? 
                    <Link 
                        aria-label="Профиль"
                        className="header__button header__button_profile" 
                        to="/profile"
                    // title="Профиль"
                    >
                        <PersonOutlineIcon />
                    </Link>
                    :
                    <IconButton className="header__button header__button_profile"  onClick={handleOpenAuthPopup}>
                        <PersonOutlineIcon />
                    </IconButton>
                }
                
            </Tooltip> 
        </div>
    )
}