import "./Items.css";
import CardsContainer from "../CardsContainer/CardsContainer"
import { useState, useEffect } from "react";
export default function Items({allItems, cartItems, setCartItems}) {
    const [bakeryItems, setBakeryItems] = useState([]);
    const [dessertsItems, setDessertsItems] = useState([]);
    const [drinksItems, setDrinksItems] = useState([]);

    function sortItems() {
        const bakeryItems = allItems.filter(item => item["category"] === "Выпечка");
        const dessertsItems = allItems.filter(item => item["category"] === "Десерты");
        const drinksItems = allItems.filter(item => item["category"] === "Напитки");
        setBakeryItems(bakeryItems);
        setDessertsItems(dessertsItems);
        setDrinksItems(drinksItems);
    }


    useEffect(() => {
        sortItems();
    }, [allItems])

    return (
        <section className="items">
            <h1 className="items__title title">Меню</h1>
            <CardsContainer 
                containerTitle="Выпечка" 
                sectionId="bakery-products" 
                cardItems={bakeryItems}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
            <CardsContainer 
                containerTitle="Десерты"
                sectionId="desserts" 
                cardItems={dessertsItems}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
            <CardsContainer 
                containerTitle="Напитки"
                sectionId="drinks" 
                cardItems={drinksItems}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
        </section>
    );
}