import "./Cart.css";

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { StyledEngineProvider } from "@mui/material";

import CartItem from "./CartItem/CartItem";


export default function Cart({ handleClose, tempCartItems, }) {
    // const [items, setItems] = useState([]);

    return (
        <StyledEngineProvider injectFirst>
            <section className="cart">
                <button onClick={handleClose} className="cart__button cart__button_close link">
                    <CloseIcon />
                </button>
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
                                    <CartItem item={item} />
                                ))
                            }
                        </div>
                        <div className="cart__buttons-container">
                            <Button variant="contained" className="cart__button cart__button_order">Оформить заказ</Button>
                            <Button variant="otlined" className="cart__button cart__button_clear-all">Очистить корзину</Button>
                        </div>
                    </div>
                }
            </section>
        </StyledEngineProvider>
    );
}