import ItemCard from "../ItemCard/ItemCard";
import "./CardsContainer.css"
import CircularProgress from '@mui/material/CircularProgress';


export default function CardsContainer({containerTitle, sectionId, cardItems, cartItems, setCartItems}) {
    function addToCart(item) {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

        if (!existingItem) {
          setCartItems(prevItems => [...prevItems, item]);
        }        
        //console.log(cartItems);
    }

    function deleteFromCart(item) {

        const newCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);

        setCartItems(newCartItems);
    }

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
                            addToCart={addToCart}
                            deleteFromCart={deleteFromCart}
                        />
                    ))
                    :
                    <CircularProgress />
                }
            </div>
        </div>
    );
}