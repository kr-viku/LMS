import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'antd';
import './finalImageCard.css';


export interface FinalImageCardProps{
card:contentCard;


}

export const FinalImageCard: React.FC<FinalImageCardProps> = ({card}) =>{
    return(
    <div className="FinalImageCard">
        <Button className="FinalPoints" size="small"
                    style={{backgroundColor:"#EF6315", borderRadius:"5px"}}>{card.points} Points</Button>
        <Card className="FinalImage Final">
            <Card.Img className="FinalImage"
                src={card.content.ImageFile} />
            <Card.Body>
                {card.content.ImageCaption}
            </Card.Body>
        </Card>
        
    </div>
    
);
};