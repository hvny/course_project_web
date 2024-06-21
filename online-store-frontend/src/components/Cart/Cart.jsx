import "./Cart.css";


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { 
    Button, 
    IconButton 
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import ItemCardSmall from "../ItemCardSmall/ItemCardSmall";

export default function Cart({ handleClose, tempCartItems}) {
    const [items, setItems] = useState(tempCartItems);
    const [totalPrice, setTotalPrice] = useState(tempCartItems.reduce((total, item) => total + item.price, 0));

    function getTotalPrice() {
        const sum = tempCartItems.reduce((total, item) => total + item.price, 0);
        console.log(sum);
        return sum;
    }

    return (
        <section className="cart">
            <IconButton onClick={handleClose} className="cart__button cart__button_close link"><CloseIcon /></IconButton>
            <h2 className="cart__title">Корзина</h2>
            {
                items.length < 1 ?
                <div className="cart__container_empty">
                    <p className="cart__subtitle">В корзине пусто</p>
                    <Link to="/" className="link cart__link" onClick={handleClose}>Перейти в меню</Link>
                </div>
                :
                <div className="cart__container">
                    <div className="cart__cards">
                        {
                            tempCartItems.map((item, key) => (
                                <ItemCardSmall item={item} key={item.id} tempCartItems={items} setTempCartItems={setItems} setTotalPrice={setTotalPrice} totalPrice={totalPrice} />
                            ))
                        }
                    </div>
                    <h3 className="cart__total-price">{`Итого: ${totalPrice} рублей`}</h3>
                    <div className="cart__buttons-container">
                        <Link to="/order" onClick={handleClose} className="cart__button cart__button_order link">ОФОРМИТЬ ЗАКАЗ</Link>
                        <Button variant="otlined" className="cart__button cart__button_clear-all">Очистить корзину</Button>
                    </div>
                </div>
            }
         </section>
        
    );
}