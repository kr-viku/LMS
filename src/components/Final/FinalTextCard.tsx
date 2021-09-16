import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'antd';
import './finalTextCard.css';


export interface FinalTextCardProps{

    card:contentCard;

}

export const FinalTextCard: React.FC<FinalTextCardProps> = ({card}) =>{
    return(
    <div className="FinalTextCard">
        <Button className="FinalPoints" size="small"
                    style={{backgroundColor:"#EF6315", borderRadius:"5px"}}>{card.points} Points</Button>
        <Card className="FinalText Final" dangerouslySetInnerHTML={{__html:card.content.Text || ""}}>

        </Card>
        
    </div>
    
);
};