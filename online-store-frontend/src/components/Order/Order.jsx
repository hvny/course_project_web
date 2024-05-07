import "./Order.css";

import { useState } from "react";

import { Button } from "@mui/material";

import ItemCardSmall from "../ItemCardSmall/ItemCardSmall";

export default function Order({ tempItems }) {
    const [addressArr, setAddressArr] = useState([]);

    function createOrder() {

    }

    return (
        <section className="order">
            <h1 className="title order__title">Оформление заказа</h1>
            <div className="order__container">  
                <ul className="order__items-list">
                    {/* {
                        itemsArr.map((item) => (
                            
                        ))
                    } */}
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