import { useState } from 'react';
import "./Cart.css";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Cart({handleClose, isOpen}) {

    const [items, setItems] = useState([]);


    
    return (
        <section className="cart">
            <h2 className="cart__title">Корзина</h2>
            {
                items.length === 0 ?
                <div className="cart__container_empty">
                    <p className="cart__subtitle">В корзине пусто</p>
                    <Link to="/" className="link cart__link" onClick={handleClose}>Перейти в меню</Link>
                </div>
                :
                <div className="cart__container">
                    <div className="cart__buttons-container">
                        <Button variant="contained">Оформить заказ</Button>
                        <Button variant="otlined">Очистить корзину</Button>
                    </div>
                </div>
            }
        </section>
    );
}