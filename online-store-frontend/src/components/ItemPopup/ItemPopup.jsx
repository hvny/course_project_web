import "./ItemPopup.css";

import { useState, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

export default function ItemPopup({item, handleClose, itemsQuantity, handleIncreaseQuantity, handleDecreaseQuantity, handleAddButtonClick}) {
    // const [isButtonClicked, setIsButtonClicked] = useState(false);
    // const [itemsQuantity, setItemsQuantity] = useState(0);

    // useEffect(() => {
    //     // нужна логика проверки нажатия на кнопку
    // }, [isButtonClicked]);

    // function handleAddButtonClick() {
    //     handleIncreaseQuantity();
    //     setIsButtonClicked(!isButtonClicked);
    // }

    // function handleIncreaseQuantity() {
    //     setItemsQuantity(itemsQuantity+1);
    // }

    // function handleDecreaseQuantity() {
    //     setItemsQuantity(itemsQuantity-1);
    // }

    return (
        <StyledEngineProvider injectFirst> 
            <div className="item-info">
                <div className="item-info__main">
                    <h2 className="item-info__title title">{item.title}</h2>
                    <img src={item.image} alt={item.title} className="item-info__image" />
                </div>
                <div className="item-info__about">
                    <p className="item-info__composition item-info__paragraph">test</p>
                    <p className="item-info__calories item-info__paragraph">test2</p>
                    {
                        itemsQuantity === 0 ? 
                        <Button variant="contained" onClick={handleAddButtonClick} className="item-info__button_add">Добавить</Button>
                        :
                        <div className="item-info__buttons">
                            <IconButton onClick={handleDecreaseQuantity}>
                                <RemoveIcon />
                            </IconButton>
                            <span className="item-info__quantity">{itemsQuantity}</span>
                            <IconButton onClick={handleIncreaseQuantity}>
                                <AddIcon/>
                            </IconButton>
                        </div>
                    }
                </div>
                <IconButton onClick={handleClose} className="item-info__button_close">
                    <CloseIcon />
                </IconButton>
            </div>
        </StyledEngineProvider>
    );
}