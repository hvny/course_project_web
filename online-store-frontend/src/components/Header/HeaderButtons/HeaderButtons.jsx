import "./HeaderButtons.css";

import { IconButton, StyledEngineProvider } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";


export default function HeaderButtons({ isCartOpen, handleCartClick }) {
    
    return (
        <StyledEngineProvider injectFirst>
            <div className="header__buttons">
                <IconButton 
                    aria-label="ShoppingBagOutlined" 
                    className="header__button_cart"
                    onClick={handleCartClick}
                >
                    <ShoppingBagOutlinedIcon className="header__icon_cart"  />
                </IconButton>
                <Drawer 
                    open={isCartOpen}
                    onClose={handleCartClick} 
                    anchor="right"
                >
                    <Cart handleClose={handleCartClick} />
                </Drawer>
                <Link className="header__button_profile" to="/profile">Профиль</Link>
            </div>
        </StyledEngineProvider>
    )
}