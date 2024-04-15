import "./Order.css";

import { useState } from "react";

export default function Order() {
    const [addressArr, setAddressArr] = useState([]);

    return (
        <section className="order">
            <h1 className="title order__title">Ваш заказ</h1>
            <div className="order__container">  
                
            </div>
        </section>
    );
}