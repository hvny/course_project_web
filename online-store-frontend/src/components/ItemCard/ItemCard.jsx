import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ItemPopup from '../ItemPopup/ItemPopup';
import { useState } from 'react';
import "./ItemCard.css";
import testImage from "../../images/bulka.jpg"

export default function ItemCard({itemName}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function handleCardClick() {
        setIsPopupOpen(!isPopupOpen);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Card className="card">
            <CardActionArea onClick={handleCardClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={testImage}
                    alt="булка"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="card__title">
                        Булка
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography> */}
                </CardContent>
            </CardActionArea>
            <Modal
                open={isPopupOpen}
                onClose={handleCardClick}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ItemPopup />
                </Box>
            </Modal>
            <CardActions>
                <Button size="small" color="primary" className="card__button card__button_add">
                    Добавить
                </Button>
            </CardActions>
        </Card>
    );
}