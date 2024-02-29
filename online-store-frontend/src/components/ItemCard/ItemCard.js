import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import "./ItemCard.css";
import testImage from "../../images/bulka.jpg"

export default function ItemCard({itemName}) {

    function handleClick() {
        console.log("that works");
    }

    return (
        <Card className="card">
            <CardActionArea onClick={handleClick}>
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
            <CardActions>
                <Button size="small" color="primary" className="card__button card__button_add">
                    Добавить
                </Button>
            </CardActions>
        </Card>
    );
}