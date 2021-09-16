import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'antd';
import './finalVideoCard.css';


export interface FinalVideoCardProps{

    card:contentCard;

}

export const FinalVideoCard: React.FC<FinalVideoCardProps> = ({card}) =>{
    return(
    <div className="FinalVideoCard">
        <Button className="FinalPoints" size="small"
                    style={{backgroundColor:"#EF6315", borderRadius:"5px"}}>{card.points} Points</Button>
        <Card className="FinalImage Final">
        <video controls>
                <source src={card.content.VideoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Card.Body>
                {card.content.VideoCaption}
            </Card.Body>
        </Card>
        
    </div>
    
);
};