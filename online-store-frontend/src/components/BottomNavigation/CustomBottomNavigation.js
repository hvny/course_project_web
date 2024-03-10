import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { StyledEngineProvider } from '@mui/material/styles';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "./CustomBottomNavigation.css";

export default function CustomBottomNavigation() {
    const location = useLocation().pathname;
    const [currentTarget, setCurrentTarget] = useState(location);

    const handleChange = (event, newValue) => {
        setCurrentTarget(newValue);
    };

    return (
        <div className="bottom-nav">
            <StyledEngineProvider injectFirst>
                <BottomNavigation sx={{ width: 500 }} value={currentTarget} onChange={handleChange} className="bottom-nav_content">
                    <BottomNavigationAction
                        label="Меню"
                        value="/"
                        icon={<FastfoodIcon  className="bottom-nav__icon" />}
                        href="/"
                        className="bottom-nav__text"
                    />
                    <BottomNavigationAction
                        label="Корзина"
                        value="cart"
                        icon={<ShoppingBagOutlinedIcon className="bottom-nav__icon" />}
                        className="bottom-nav__text"
                    />
                    <BottomNavigationAction
                        label="Профиль"
                        value="profile"
                        icon={<PersonOutlineIcon className="bottom-nav__icon" />}
                        href="/profile" 
                        className="bottom-nav__text"
                    />
                </BottomNavigation>
            </StyledEngineProvider>
        </div>  
    );
}