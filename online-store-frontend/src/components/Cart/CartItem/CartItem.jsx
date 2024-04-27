import "./CartItem.css";

import { useState } from "react";

import { CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CartItem({ item, deleteItem, }) {
    const [itemsQuantity, setItemsQuantity] = useState(1);

    return (
        <Card className="cart-item">
            <div className="cart-item__row cart-item__row_1">   
                <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    className="cart-item__image"
                />
                <div className="cart-item__title-container">
                    <h3 className="cart-item__title">{item.title}</h3>
                </div>
            </div>
            <div className="cart-item__row">
                <CardActions className="cart-item__actions">
                    <div className="cart-item__buttons">
                        <IconButton className="cart-item__button_remove">
                            <RemoveIcon />
                        </IconButton>
                        <span className="cart-item__quantity">{itemsQuantity}</span>
                        <IconButton  className="cart-item__button_add">
                            <AddIcon/>
                        </IconButton>
                        <IconButton className="cart-item__button_delete" onClick={deleteItem}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </CardActions>
            </div>
        </Card>
    );
}