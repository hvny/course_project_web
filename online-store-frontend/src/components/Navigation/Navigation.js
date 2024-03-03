import { forwardRef, useContext } from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { PopupContext } from '@mui/base/Unstable_Popup';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { CssTransition } from '@mui/base/Transitions'

function Navigation(props) {
    const location = useLocation();
    const MenuItem = styled(BaseMenuItem)(({ theme }) => ``,);

    const MenuButton = styled(BaseMenuButton)(
        ({ theme }) => `
        color: #ffffff;
        background-color: transparent;
        border: none;
        cursor: pointer;
        `,
    );

    const Listbox = styled('ul')(
        ({ theme }) => `
        list-style: none;
        padding: 6px;
        border-radius: 12px;
        z-index: 20;
        background-color: #ffffff;
        text-align: center;
      
        .closed & {
            opacity: 0;
            transform: scale(0.95, 0.8);
            transition: opacity 200ms ease-in, transform 200ms ease-in;
        }
        
        .open & {
            opacity: 1;
            transform: scale(1, 1);
            transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
        }
        `,
      );

      const AnimatedListbox = forwardRef(function AnimatedListbox(props, ref) {
        const { ownerState, ...other } = props;
        const popupContext = useContext(PopupContext);
      
        if (popupContext == null) {
          throw new Error(
            'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
          );
        }
      
        const verticalPlacement = popupContext.placement.split('-')[0];
      
        return (
          <CssTransition
            className={`placement-${verticalPlacement}`}
            enterClassName="open"
            exitClassName="closed"
          >
            <Listbox {...other} ref={ref} />
          </CssTransition>
        );
      });
  
    return (
        <nav class="header__navigation">
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
                    <NavLink to="/events" className={`link header__link ${location.pathname === "/events" ? "header__link_active" : ""}`}>Акции</NavLink>
                </li>
                <li className="header__navigation-list-item">
                    <a href="https://www.hlebnitca.ru/about" target="__blank" className="link header__link">О нас</a>
                </li>
            </ul>
            
        </nav>
    );
}

export default Navigation;