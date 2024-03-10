import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { forwardRef, useContext } from 'react';
import { PopupContext } from '@mui/base/Unstable_Popup';
import { CssTransition } from '@mui/base/Transitions'

export const MenuItem = styled(BaseMenuItem)(({ theme }) => ``,);

export const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    color: #ffffff;
    background-color: transparent;
    border: none;
    cursor: pointer;
    `,
);

export const Listbox = styled('ul')(
    ({ theme }) => `
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 6px;
    border-radius: 12px;
    z-index: 20;
    background-color: #ffffff;
     
  
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

export const AnimatedListbox = forwardRef(function AnimatedListbox(props, ref) {
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