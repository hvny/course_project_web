import "./ItemCard.css";

import { useEffect, useState } from 'react';

import ItemPopup from './ItemPopup/ItemPopup';

import { StyledEngineProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { 
    Button, 
    CardActionArea, 
    CardActions, 
    IconButton 
} from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ItemCard({item, addToCart, deleteFromCart}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [itemsQuantity, setItemsQuantity] = useState(0);

    function handleCardClick() {
        setIsPopupOpen(!isPopupOpen);
    }

    function handleIncreaseQuantity() {
        setItemsQuantity(itemsQuantity+1);
    }

    function handleDecreaseQuantity() {
        setItemsQuantity(itemsQuantity-1);
    }

    function handleAddButtonClick() {
        handleIncreaseQuantity();
        addToCart(item);
        setIsButtonClicked(!isButtonClicked);
    }

    function handleRemoveButtonClick(item) {
        handleDecreaseQuantity();
        deleteFromCart(item);
    }
    
    return (
        <Card className="card">
            <CardActionArea onClick={handleCardClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={require(`../../images/${item.image}`)}
                    //src="/src/images/hachapuri.jpg"
                    alt={item.title}
                />
                <CardContent className="card__content">
                    <h3 className="card__title">
                        {item.title}
                    </h3>
                </CardContent>
            </CardActionArea>
            <Modal
                open={isPopupOpen}
                onClose={handleCardClick}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="card__popup">
                    <ItemPopup 
                        item={item} 
                        handleClose={handleCardClick} 
                        itemsQuantity={itemsQuantity}
                        handleIncreaseQuantity={handleIncreaseQuantity}
                        handleDecreaseQuantity={handleDecreaseQuantity}
                        handleAddButtonClick={handleAddButtonClick}
                    />
                </Box>
            </Modal>
            <CardActions className="card__actions">
                <h3 className="card__price">{`${item.price} рублей`}</h3>
                {
                    itemsQuantity === 0 ?
                    <Button size="small" color="primary" className="card__button card__button_add" variant="outlined" onClick={handleAddButtonClick}>Добавить</Button>
                    :
                    <IconButton onClick={handleRemoveButtonClick} className="card__button card__button_checked">
                            <CheckCircleIcon />
                    </IconButton>
                } 
            </CardActions>
        </Card>
    );
}