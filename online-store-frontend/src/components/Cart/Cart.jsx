import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import "./Cart.css";
    

export default function Cart({handleClose}) {

    const [items, setItems] = useState([]);

    return (
        <section className="cart">
            <button onClick={handleClose} className="cart__button_close link">
                <CloseIcon />
            </button>
            <h2 className="cart__title">Корзина</h2>
            {
                items.length === 1 ?
                <div className="cart__container_empty">
                    <p className="cart__subtitle">В корзине пусто</p>
                    <Link to="/" className="link cart__link" onClick={handleClose}>Перейти в меню</Link>
                </div>
                :
                <div className="cart__container">
                    <div className="cart__cards">

                    </div>
                    <div className="cart__buttons-container">
                        <Button variant="contained">Оформить заказ</Button>
                        <Button variant="otlined">Очистить корзину</Button>
                    </div>
                </div>
            }
        </section>
    );
}