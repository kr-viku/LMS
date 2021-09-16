import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'antd';
import './finalFileCard.css';


export interface FinalFileCardProps{
    card:contentCard;


}

export const FinalFileCard: React.FC<FinalFileCardProps> = ({card}) =>{
    return(
    <div className="FinalFileCard">
        <Button className="FinalPoints" size="small"
                    style={{backgroundColor:"#EF6315", borderRadius:"5px"}}>{card.points} Points</Button>
        <Card className="FinalImage Final">
        <div className="DisplayPDFTitle">{card.content.PDFTitle}</div>
            <div className="DisplayFileDescription">
                {card.content.PDFDescription}
            </div>
            <div className="DisplayFile" style={{backgroundColor:"transparent"}}>
                <a href={card.content.PDFFile} ><p className="DisplayFileName" style={{color:"rgb(31, 141, 237)"}} ><u> {card.content.PDFName}</u></p></a>
            </div>

        </Card>
        
    </div>
    
);
};