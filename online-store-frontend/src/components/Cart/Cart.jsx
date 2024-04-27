import "./Cart.css";


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { 
    Button, 
    IconButton 
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import ItemCardSmall from "../ItemCardSmall/ItemCardSmall";

export default function Cart({ handleClose, tempCartItems, }) {
    // const [items, setItems] = useState([]);
    const navigate = useNavigate();


    return (
        <section className="cart">
            <IconButton onClick={handleClose} className="cart__button cart__button_close link"><CloseIcon /></IconButton>
            <h2 className="cart__title">Корзина</h2>
            {
                tempCartItems.length < 1 ?
                <div className="cart__container_empty">
                    <p className="cart__subtitle">В корзине пусто</p>
                    <Link to="/" className="link cart__link" onClick={handleClose}>Перейти в меню</Link>
                </div>
                :
                <div className="cart__container">
                    <div className="cart__cards">
                        {
                            tempCartItems.map((item) => (
                                <ItemCardSmall item={item} />
                            ))
                        }
                    </div>
                    <div className="cart__buttons-container">
                        <Link to="/order" onClick={handleClose} className="cart__button cart__button_order link">ОФОРМИТЬ ЗАКАЗ</Link>
                        <Button variant="otlined" className="cart__button cart__button_clear-all">Очистить корзину</Button>
                    </div>
                </div>
            }
         </section>
        
    );
}