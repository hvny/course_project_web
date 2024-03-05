import { IconButton } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";

export default function HeaderButtons({isCartOpen, handleCartClick, additionalClassName}) {
    return (
        <div className={`header__buttons ${additionalClassName}`}>
            <IconButton aria-label="ShoppingBagOutlined" size="large" className="header__button_cart" style={{backgroundColor: "#ffffff", marginRight: "20px"}} onClick={handleCartClick}>
                <ShoppingBagOutlinedIcon className="header__icon_cart"  />
            </IconButton>
            <Drawer open={isCartOpen} onClose={handleCartClick} anchor="right">
                <Cart handleClose={handleCartClick}  />
            </Drawer>
            <Link className="header__button_profile">Профиль</Link>
        </div>
    )
}