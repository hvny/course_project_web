import CardsContainer from "../CardsContainer/CardsContainer"
import "./Items.css";

export default function Items({bakeryItems, dessertsItems, drinksItems}) {
    return (
        <section className="items">
            <h1 className="items__title title">Меню</h1>
            <CardsContainer 
                containerTitle="Выпечка" 
                sectionId="bakery-products" 
                cardItems={bakeryItems}
            />
            <CardsContainer 
                containerTitle="Десерты"
                sectionId="desserts" 
                cardItems={dessertsItems}
            />
            <CardsContainer 
                containerTitle="Напитки"
                sectionId="drinks" 
                cardItems={drinksItems}
            />
        </section>
    );
}