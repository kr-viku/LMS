import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'antd';
import './finalLinkCard.css';


export interface FinalLinkCardProps{

    card:contentCard;

}

export const FinalLinkCard: React.FC<FinalLinkCardProps> = ({card}) =>{
    return(
    <div className="FinalLinkCard">
        <Button className="FinalPoints" size="small"
                    style={{backgroundColor:"#EF6315", borderRadius:"5px"}}>{card.points} Points</Button>
        <Card className="FinalImage Final">
        <Card.Img className="FinalImage"
                src={card.content.LinkImageFile} />
             <div className="DisplayFile" style={{backgroundColor:"transparent"}}>
                <a href={card.content.Link} ><p className="DisplayFileName" style={{color:"rgba(31,141,237,1)"}}><u> {card.content.LinkTitle}</u></p></a>
            </div>
            <div className="DisplayFileDescription">
                {card.content.LinkDescription}
            </div>
           

        </Card>
        
    </div>
    
);
};