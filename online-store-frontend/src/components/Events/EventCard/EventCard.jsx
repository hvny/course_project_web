import "./EventCard.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { 
    Button, 
    CardActionArea, 
    CardActions, 
    IconButton 
} from '@mui/material';

import { StyledEngineProvider } from '@mui/material/styles';

export default function EventCard({eventItem}) {
    return (
        <StyledEngineProvider injectFirst>
            <Card className="events__card">
                <CardMedia
                    className="events__card-image"
                    component="img"
                    image={eventItem.image}
                    alt={eventItem.title}
                />
                <CardContent className="events__card-content">
                    <h2 className="events__card-title">
                        {eventItem.title}
                    </h2>
                    <p className="events__card-paragraph">
                        {eventItem.about}
                    </p>
                </CardContent>
            </Card>
        </StyledEngineProvider>
        // <div>
        //     <img src={eventImage} alt={`Акция ${eventTitle}`}/>
        //     <h2>{eventTitle}</h2>
        //     <p>{eventText}</p>
        // </div>
    );
}