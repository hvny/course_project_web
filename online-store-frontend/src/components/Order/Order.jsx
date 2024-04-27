import "./Order.css";

import { useState } from "react";

import { Button } from "@mui/material";

export default function Order() {
    const [addressArr, setAddressArr] = useState([]);
    const itemsArr = [
        
    ];
        
    function createOrder() {

    }

    return (
        <section className="order">
            <h1 className="title order__title">Оформление заказа</h1>
            <div className="order__container">  
                <ul className="order__items-list">
                    
                </ul>
                <div className="order__address-container">

                </div>
                <div className="order__buttons-container">
                    <Button variant="contained" className="order__button" onClick={createOrder}>Заказать</Button>
                </div>
            </div>
            
        </section>
    );
}