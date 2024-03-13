import ItemCard from "../ItemCard/ItemCard";
import "./CardsContainer.css"

import CircularProgress from '@mui/material/CircularProgress';
import hachapuriImg from "../../images/hachapuri.jpg";
import medovikImg from "../../images/medovik.jpeg";
import PragueImg from "../../images/cake.jpg";
import potatoImg from "../../images/potato.jpg";
import milkshakeImg from "../../images/milkshake.jpg";

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
                        />
                    ))
                    :
                    <CircularProgress />
                }
            </div>
        </div>
    );
}