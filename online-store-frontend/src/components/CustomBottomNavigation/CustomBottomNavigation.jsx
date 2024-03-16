import "./CustomBottomNavigation.css";

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { StyledEngineProvider } from '@mui/material/styles';

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventIcon from '@mui/icons-material/Event';



export default function CustomBottomNavigation({currentLocation}) {
    const location = useLocation();
    const [currentTarget, setCurrentTarget] = useState(location.pathname);
    console.log(currentTarget)

    useEffect(() => {
        setCurrentTarget(currentLocation);
    }, [currentTarget]);

    const handleChange = (event, newValue) => {
        setCurrentTarget(newValue);
    };

    return (
        <div className="bottom-nav">
            <StyledEngineProvider injectFirst>
                <BottomNavigation sx={{ width: 500 }} value={currentTarget} onChange={(event, newValue) => {setCurrentTarget(newValue)}} className="bottom-nav_content">
                    <BottomNavigationAction
                        label="Меню"
                        value="/"
                        icon={<FastfoodIcon  className="bottom-nav__icon" />}
                        href="/"
                        className="bottom-nav__text"
                    />
                    <BottomNavigationAction
                        label="Акции"
                        value="/events"
                        href="/events"
                        icon={<EventIcon className="bottom-nav__icon" />}
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