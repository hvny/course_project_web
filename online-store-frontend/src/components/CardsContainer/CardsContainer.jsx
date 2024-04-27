import ItemCard from "../ItemCard/ItemCard";
import "./CardsContainer.css"

import CircularProgress from '@mui/material/CircularProgress';


export default function CardsContainer({containerTitle, sectionId, cardItems}) {
    return (
        <div className="cards" id={sectionId}>
            <h2 className="cards__title">{containerTitle}</h2>
            <div className="cards__container">
                {
                    cardItems && cardItems.length > 0 ?
                    cardItems.map((item, key) => (
                        <ItemCard 
                            item={item}
                            key={item.title}
                        />
                    ))
                    :
                    <CircularProgress />
                }
            </div>
        </div>
    );
}