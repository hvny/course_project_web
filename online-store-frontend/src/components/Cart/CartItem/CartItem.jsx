import "./CartItem.css";

import { StyledEngineProvider } from '@mui/material/styles';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { 
    Button, 
    CardActionArea, 
    CardActions, 
} from '@mui/material';

import hachapuriImg from "../../../images/hachapuri.jpg";


export default function CartItem() {
    const theme = useTheme();
    const [itemsQuantity, setItemsQuantity] = useState(0);
    return (
        <StyledEngineProvider injectFirst>
            <Card className="cart-item">
                <div className="cart-item__row cart-item__row_1">   
                    <CardMedia
                        component="img"
                        // sx={{ width: 100 }}
                        image={hachapuriImg}
                        alt="Live from space album cover"
                        className="cart-item__image"
                    />
                    <div className="cart-item__title-container">
                        <h3 className="cart-item__title">Хачапури</h3>
                    </div>
                </div>
                <div className="cart-item__row">
                    <CardActions className="cart-item__actions">
                        <div className="card__buttons">
                            <IconButton >
                                <RemoveIcon />
                            </IconButton>
                            <span className="item-info__quantity">2</span>
                            <IconButton >
                                <AddIcon/>
                            </IconButton>
                            <IconButton className="cart-item__button_delete">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </CardActions>
                </div>
                
                
                {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Mac Miller
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                </Box> */}
                
            </Card>
        </StyledEngineProvider>
    );
}