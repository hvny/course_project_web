import "./ItemCardSmall.css";

import { useState } from "react";

import { CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ItemCardSmall({ item, deleteItem, }) {
    const [itemsQuantity, setItemsQuantity] = useState(1);

    return (
        <Card className="item-small">
            <div className="item-small__row item-small__row_1">   
                <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    className="item-small__image"
                />
                <div className="item-small__title-container">
                    <h3 className="item-small__title">{item.title}</h3>
                </div>
            </div>
            <div className="item-small__row">
                <CardActions className="item-small__actions">
                    <div className="item-small__buttons">
                        <IconButton className="item-small__button_remove">
                            <RemoveIcon />
                        </IconButton>
                        <span className="item-small__quantity">{itemsQuantity}</span>
                        <IconButton  className="item-small__button_add">
                            <AddIcon/>
                        </IconButton>
                        <IconButton className="item-small__button_delete" onClick={deleteItem}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </CardActions>
            </div>
        </Card>
    );
}