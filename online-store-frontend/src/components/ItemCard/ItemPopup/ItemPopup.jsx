import "./ItemPopup.css";

import { useState, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
                <h2 className="item-info__title title">{item.title}</h2>
                <div className="item-info__container">
                    <div className="item-info__main">
                        <img src={require(`../../../images/${item.image}`)} alt={item.title} className="item-info__image" />
                    </div>
                    <div className="item-info__about">
                        <div className="item-info__composition-container">
                            <h3 className="item-info__subtitle">Состав</h3>
                            <p className="item-info__composition item-info__paragraph">{item.composition}</p>
                        </div>
                        <div className="item-info__button-container">
                            <h3>{`${item.price} рублей`}</h3>
                            {/* {
                            itemsQuantity === 0 ? 
                            <Button 
                                variant="contained" 
                                onClick={handleAddButtonClick} 
                                className="item-info__button_add"
                                title="Добавить в корзину"
                                aria-label="Добавить в корзину"
                            >
                                Добавить
                            </Button>
                            :
                            <div className="item-info__buttons">
                                <IconButton onClick={handleDecreaseQuantity} className="card__button card__button_checked">
                                    <CheckCircleIcon />
                                </IconButton>
                            </div>
                            } */}
                        </div>
                        
                    </div>
                </div>
                <IconButton onClick={handleClose} className="item-info__button_close item-info__button_icon">
                    <CloseIcon />
                </IconButton>
            </div>
        </StyledEngineProvider>
    );
}