import ItemCard from "../ItemCard/ItemCard";
import "./CardsContainer.css"

export default function CardsContainer({containerTitle}) {
    return (
        <section className="cards">
            <h2 className="cards__title">{containerTitle}</h2>
            <div className="cards__container">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />


            </div>
        </section>
    );
}