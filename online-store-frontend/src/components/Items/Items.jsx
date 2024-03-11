import CardsContainer from "../CardsContainer/CardsContainer"
import CustomBottomNavigation from "../BottomNavigation/CustomBottomNavigation";
import "./Items.css";

export default function Items() {
    return (
        <section className="items">
            <h1 className="items__title title">Меню</h1>
            <CardsContainer containerTitle={"Выпечка"} sectionId="bakery-products" />
            <CardsContainer containerTitle={"Десерты"} sectionId="desserts" />
            <CardsContainer containerTitle={"Напитки"} sectionId="drinks" />
            <CustomBottomNavigation />
        </section>
    );
}