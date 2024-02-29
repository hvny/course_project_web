import CardsContainer from "../CardsContainer/CardsContainer"
import "./Main.css";

export default function Main() {
    return (
        <main className="main">
            <h1 className="main__title">Меню</h1>
            <CardsContainer containerTitle={"Выпечка"} sectionId="bakery-products" />
            <CardsContainer containerTitle={"Десерты"} sectionId="desserts" />
            <CardsContainer containerTitle={"Напитки"} sectionId="drinks" />
        </main>
    );
}