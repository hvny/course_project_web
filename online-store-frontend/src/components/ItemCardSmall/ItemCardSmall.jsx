import "./ItemCardSmall.css";

import { useState, useRef, useEffect } from "react";

import { CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ItemCardSmall({ item, tempCartItems, setTempCartItems, setTotalPrice, totalPrice}) {
    const [itemsQuantity, setItemsQuantity] = useState(1);
    const priceRef = useRef(null);
    

    function handleIncreaseQuantity() {
        setItemsQuantity(itemsQuantity+1);
    }

    function handleDecreaseQuantity() {
        setItemsQuantity(itemsQuantity-1);
    }

    function changeArr(newArr) {
        setTempCartItems(newArr);
    }

    function addMoreItems() {
        handleIncreaseQuantity();

        const currentPrice = Number(priceRef.current.textContent.split(' ')[0]);
        const newPrice = item.price + currentPrice;
        setTotalPrice(totalPrice + item.price);

        priceRef.current.textContent = `${newPrice} рублей`;

        const newTempCartItems = tempCartItems.map(cartItem => {
            if (cartItem.id === item.id) {
                return { ...cartItem, price: newPrice };
            } else {
                return cartItem;
            }
        });

        changeArr(newTempCartItems);
    }

    function removeItem() {
        if (itemsQuantity > 1) { 
            handleDecreaseQuantity();
            setTotalPrice(totalPrice - item.price);
            const currentPrice = Number(priceRef.current.textContent.split(' ')[0]);
            const newPrice = currentPrice - item.price;
        
            priceRef.current.textContent = `${newPrice} рублей`;

            const newTempCartItems = tempCartItems.map(cartItem => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, price: newPrice };
                } else {
                    return cartItem;
                }
            });
            changeArr(newTempCartItems);
        }
        else {
            deleteItem(item);
        }
    }

    function deleteItem() {
        const newTempCartItems = tempCartItems.filter(cartItem => cartItem.id !== item.id);
        console.log("new: ", newTempCartItems);
        changeArr(newTempCartItems);
        priceRef.current.closest('.item-small').remove();
    }

    return (
        <Card className="item-small">
            <div className="item-small__row item-small__row_1">   
                <CardMedia
                    component="img"
                    image={require(`../../images/${item.image}`)}
                    alt={item.title}
                    className="item-small__image"
                />
                <div className="item-small__title-container">
                    <h3 className="item-small__title">{item.title}</h3>
                </div>
            </div>
            <div className="item-small__row item-small__row_2">
                <CardActions className="item-small__actions">
                    <div className="item-small__buttons">
                        <IconButton className="item-small__button_remove"   onClick={removeItem}>
                            <RemoveIcon />
                        </IconButton>
                        <span className="item-small__quantity">{itemsQuantity}</span>
                        <IconButton  className="item-small__button_add" onClick={addMoreItems}>
                            <AddIcon/>
                        </IconButton>
                        <IconButton className="item-small__button_delete" onClick={deleteItem}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                    <h3 ref={priceRef} className="item-small__price">{`${item.price} рублей`}</h3>
                </CardActions>
            </div>
        </Card>
    );
}