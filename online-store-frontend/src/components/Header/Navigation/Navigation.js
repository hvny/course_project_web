import { NavLink, useLocation} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuItem as BaseMenuItem } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

import { MenuButton, AnimatedListbox } from '../../../utils/constants/navigationConstants';
import "./Navigation.css";


function Navigation(props) {
    const location = useLocation();
    const MenuItem = styled(BaseMenuItem)(({ theme }) => ``,);

  
    return (
        <nav className="header__navigation">
            <ul className="header__navigation-list">
                <li className="header__navigation-list-item">
                    <Dropdown>
                        <MenuButton className={`link header__link ${location.pathname === "/" ? "header__link_active" : ""}`}>Меню</MenuButton>
                        <Menu slots={{ listbox: AnimatedListbox }} className='header__dropdown-menu'>
                            <MenuItem className="header__menu-item"><HashLink to="/#bakery-products" className="link header__menu-link">Выпечка</HashLink></MenuItem>
                            <MenuItem className="header__menu-item"><HashLink to="/#desserts" className="link header__menu-link">Десерты</HashLink></MenuItem>
                            <MenuItem className="header__menu-item"><HashLink to="/#drinks" className="link header__menu-link">Напитки</HashLink></MenuItem>
                        </Menu>
                    </Dropdown>
                    
                </li>

                <li className="header__navigation-list-item">
                    <ul className = "header__navigation-menu-list">
                        <li className="header__navigation-list-item">
                            <HashLink to="/#bakery-products" className="link header__menu-link">Выпечка</HashLink>
                        </li>
                        <li className="header__navigation-list-item">
                            <HashLink to="/#desserts" className="link header__menu-link">Десерты</HashLink>
                        </li>
                        <li className="header__navigation-list-item">
                            <HashLink to="/#drinks" className="link header__menu-link">Напитки</HashLink>
                        </li>

                    </ul>
                </li>
                

                <li className="header__navigation-list-item">
                    <NavLink to="/events" className={`link header__link ${location.pathname === "/events" ? "header__link_active" : ""}`}>Акции</NavLink>
                </li>
                <li className="header__navigation-list-item">
                    <NavLink to="/about-delivery" className={`link header__link ${location.pathname === "/about-delivery" ? "header__link_active" : ""}`}>Доставка</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;

{/* <a href="https://www.hlebnitca.ru/about" target="__blank" className="link header__link">О нас</a> */}
