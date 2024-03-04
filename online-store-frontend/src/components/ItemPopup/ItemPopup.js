import { useState, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import "./ItemPopup.css";

export default function ItemPopup({itemTitle, itemInfo, itemId, itemImage}) {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [itemQuantity, setItemQuantity] = useState(0);

    useEffect(() => {
        // нужна логика проверки нажатия на кнопку
    }, [isButtonClicked]);

    function handleAddButtonClick() {
        handleIncreaseQuantity();
        setIsButtonClicked(!isButtonClicked);
    }

    function handleIncreaseQuantity() {
        setItemQuantity(itemQuantity+1);
    }

    function handleDecreaseQuantity() {
        setItemQuantity(itemQuantity-1);
    }

    return (
        <div className="item-info">
            <div className="item-info__main">
                <h2 className="item-info__title">{itemTitle}</h2>
                <img src={itemImage} alt={`Товар '${itemTitle}'`} className="item-info__image" />
            </div>
            <div className="item-info__about">
                <p className="item-info__composition">test</p>
                <p className="item-info__calories">test2</p>
                {itemInfo}
            </div>
{/* {itemInfo["composition"]} {itemInfo["calories"]}*/}
            {
                itemQuantity === 0 ? 
                <Button variant="contained" onClick={handleAddButtonClick}>Добавить</Button>
                :
                <div className="item-info__buttons">
                    <IconButton onClick={handleDecreaseQuantity}>
                        <RemoveIcon />
                    </IconButton>
                    <span>{itemQuantity}</span>
                    <IconButton onClick={handleIncreaseQuantity}>
                        <AddIcon/>
                    </IconButton>
                </div>
            }
            
        </div>
    );
}