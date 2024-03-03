import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import logo from "../../images/logo.svg";
import Signin from "../Signin/Signin";

function Header(props) {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 200,
        bgcolor: 'background.paper',
        borderRadius: 10,
        boxShadow: 24,
        p: 4,
    };
    
    function handleButtonClick() {
        setIsModalOpened(!isModalOpened);
    } 

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo-link"><img src={logo} className="header__logo" alt="Логотип компании"/></Link>
                <Navigation />
                    <div className="header__phone-container">
                        <LocalPhoneIcon size="large" />
                        <p className="header__phone-number">8 800 770-71-18</p>    
                    </div>
                    <div className="header__buttons">
                        <IconButton aria-label="ShoppingBagOutlined" size="large" className="header__button_cart" style={{backgroundColor: "#ffffff", marginRight: "20px"}}>
                            <ShoppingBagOutlinedIcon className="header__icon_cart" size="large" />
                        </IconButton>
                        <IconButton aria-label="Login" size="large" className="header__button_login" style={{borderRadius: "15px", backgroundColor: "#663334", padding: "4px 5px"}} onClick={handleButtonClick}>
                            <span className="header__span">Войти</span>
                            <LoginIcon className="header__icon_login" />
                        </IconButton>
                        <Modal
                            open={isModalOpened}
                            onClose={handleButtonClick}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Signin />
                            </Box>
                        </Modal>
                    </div>
            </div>
        </header>
    );
}

export default Header;