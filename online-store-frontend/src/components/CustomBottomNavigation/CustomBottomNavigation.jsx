import "./CustomBottomNavigation.css";

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventIcon from '@mui/icons-material/Event';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";



export default function CustomBottomNavigation({handleOpenAuthPopup}) {
    const location = useLocation();
    const [currentTarget, setCurrentTarget] = useState(location.pathname);
    return (
        <div className="bottom-nav">
            <BottomNavigation 
                value={currentTarget} 
                className="bottom-nav_content"
            >
                <BottomNavigationAction
                    label="Меню"
                    value={currentTarget}
                    icon={
                        <Link to="/">
                            <FastfoodIcon  className="bottom-nav__icon" />
                        </Link>
                    }
                    className={`bottom-nav__text ${location.pathname === "/" ? "bottom-nav__text_current": ""} `}
                />
                    
                <BottomNavigationAction
                    label="Акции"
                    value={currentTarget}
                    icon={
                        <Link to="/events">
                            <EventIcon className="bottom-nav__icon" />
                        </Link>
                    }
                    className={`bottom-nav__text ${location.pathname === "/events" ? "bottom-nav__text_current": ""} `}
                />
                <BottomNavigationAction
                    label="Доставка"
                    value={currentTarget}
                    icon={
                        <Link to="about-delivery">
                            <LocalShippingIcon className="bottom-nav__icon" />
                        </Link>
                    }
                    className={`bottom-nav__text ${location.pathname === "/about-delivery" ? "bottom-nav__text_current": ""} `}
                />
                <BottomNavigationAction
                    label="Профиль"
                    value={currentTarget}
                    icon={
                        localStorage.getItem("token") ? 
                        <Link to="/profile">
                            <PersonOutlineIcon className="bottom-nav__icon" />
                        </Link>
                        :
                        <IconButton className="header__button header__button_profile"  onClick={handleOpenAuthPopup}>
                            <PersonOutlineIcon />
                        </IconButton>
                    }
                    className={`bottom-nav__text ${location.pathname === "/profile" ? "bottom-nav__text_current": ""} `}
                />
            </BottomNavigation>
        </div>  
    );
}