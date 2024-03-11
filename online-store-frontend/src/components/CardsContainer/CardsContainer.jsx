import ItemCard from "../ItemCard/ItemCard";
import "./CardsContainer.css"

export default function CardsContainer({containerTitle, sectionId}) {
    return (
        <div className="cards" id={sectionId}>
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
        </div>
    );
}