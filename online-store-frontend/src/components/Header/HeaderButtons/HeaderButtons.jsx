import { IconButton } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";

import "./HeaderButtons.css";

export default function HeaderButtons({ isCartOpen, handleCartClick }) {
    // function handleClick() {
    //     // handlePopoverClose();
    //     handleCartClick();
    // } 
    // onClick={handlePopoverClose instanceof Function ? handleClick : handleCartClick}
    
    return (
        <div className={`header__buttons`}>
            <IconButton 
                aria-label="ShoppingBagOutlined" 
                size="large"
                className="header__button_cart"
                style={{backgroundColor: "#ffffff", marginRight: "20px"}}
                onClick={handleCartClick}
            >
                <ShoppingBagOutlinedIcon className="header__icon_cart"  />
            </IconButton>
            <Drawer open={isCartOpen} onClose={handleCartClick} anchor="right">
                <Cart handleClose={handleCartClick}  />
            </Drawer>
            <Link className="header__button_profile" to="/profile">Профиль</Link>
        </div>
    )
}