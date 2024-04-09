import "./HeaderButtons.css";

import { IconButton, StyledEngineProvider } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";


export default function HeaderButtons({ isCartOpen, handleCartClick, tempCartItems }) {
    
    return (
        <StyledEngineProvider injectFirst>
            <div className="header__buttons">
                <IconButton 
                    // aria-label="ShoppingBagOutlined" 
                    aria-label="Корзина"
                    className="header__button header__button_cart"
                    onClick={handleCartClick}
                    title="Корзина"
                >
                    <ShoppingBagOutlinedIcon className="header__icon_cart" />
                </IconButton>
                <Drawer 
                    open={isCartOpen}
                    onClose={handleCartClick} 
                    anchor="right"
                >
                    <Cart handleClose={handleCartClick} tempCartItems={tempCartItems} />
                </Drawer>
                <Link 
                    aria-label="Профиль"
                    className="header__button header__button_profile" 
                    to="/profile"
                    title="Профиль"
                >
                    <PersonOutlineIcon />
                </Link>
            </div>
        </StyledEngineProvider>
    )
}