import "./HeaderButtons.css";

import { 
    IconButton, 
    Drawer 
} from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { Link } from "react-router-dom";

import Cart from "../../Cart/Cart";


export default function HeaderButtons({ isCartOpen, handleCartClick, tempCartItems }) {
    
    return (
        <div className="header__buttons">
            <Tooltip title="Корзина">
                <IconButton 
                    aria-label="Корзина"
                    className="header__button header__button_cart"
                    onClick={handleCartClick}
                    // title="Корзина"
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
                <Link 
                    aria-label="Профиль"
                    className="header__button header__button_profile" 
                    to="/profile"
                    // title="Профиль"
                >
                    <PersonOutlineIcon />
                </Link>
            </Tooltip> 
        </div>
    )
}