import "./Navigation.css";

import { NavLink, useLocation} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';

import { MenuButton, AnimatedListbox, MenuItem } from '../../../utils/constants/navigationConstants';

function Navigation({handlePopoverClose}) {
    const location = useLocation();
  
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__list-item navigation__list-item_menu">
                    <Dropdown>
                        <MenuButton><span className={`link navigation__link ${location.pathname === "/" ? "navigation__link_active" : ""}`}>Еда и напитки</span></MenuButton>
                        <Menu slots={{ listbox: AnimatedListbox }} className='navigation__dropdown-menu' style={{zIndex: "1000"}}>
                            <MenuItem className="navigation__menu-item"><HashLink to="/#bakery-products" className="link navigation__menu-link">Выпечка</HashLink></MenuItem>
                            <MenuItem className="navigation__menu-item"><HashLink to="/#desserts" className="link navigation__menu-link">Десерты</HashLink></MenuItem>
                            <MenuItem className="navigation__menu-item"><HashLink to="/#drinks" className="link navigation__menu-link">Напитки</HashLink></MenuItem>
                        </Menu>
                    </Dropdown>
                    
                </li>

                <li className="navigation__list-item">
                    <NavLink to="/events" onClick={handlePopoverClose} className={`link navigation__link ${location.pathname === "/events" ? "navigation__link_active" : ""}`}>Акции</NavLink>
                </li>
                <li className="navigation__list-item">
                    <NavLink to="/about-delivery" onClick={handlePopoverClose} className={`link navigation__link ${location.pathname === "/about-delivery" ? "navigation__link_active" : ""}`}>Доставка</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;