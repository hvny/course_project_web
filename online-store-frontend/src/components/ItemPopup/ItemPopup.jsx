import "./ItemPopup.css";

import { useState, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ItemPopup({item, handleClose}) {
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
        <StyledEngineProvider injectFirst> 
            <div className="item-info">
                <div className="item-info__main">
                    <h2 className="item-info__title title">{item.title}</h2>
                    <img src={item.image} alt={item.title} className="item-info__image" />
                </div>
                <div className="item-info__about">
                    <p className="item-info__composition">test</p>
                    <p className="item-info__calories">test2</p>
                    {
                        itemQuantity === 0 ? 
                        <Button variant="contained" onClick={handleAddButtonClick} className="item-info__button_add">Добавить</Button>
                        :
                        <div className="item-info__buttons">
                            <IconButton onClick={handleDecreaseQuantity}>
                                <RemoveIcon />
                            </IconButton>
                            <span className="item-info__quantity">{itemQuantity}</span>
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