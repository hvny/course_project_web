import CardsContainer from "../CardsContainer/CardsContainer"
import "./Main.css";

export default function Main(props) {
    return (
        <main className="main">
            <CardsContainer containerTitle={"Выпечка"} id="#bakery-products" />
            <CardsContainer containerTitle={"Десерты"} id="#desserts" />
            <CardsContainer containerTitle={"Напитки"} id="#drinks" />
        </main>
    );
}