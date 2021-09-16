import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'antd';
import './finalPollCard.css';
import { PollOptions} from './PollOptions'


export interface FinalPollCardProps{

    card:contentCard;

}

export const FinalPollCard: React.FC<FinalPollCardProps> = ({card}) =>{
    return(
    <div className="FinalPollCard">
        <Button className="FinalPoints" size="small"
                    style={{backgroundColor:"#EF6315", borderRadius:"5px"}}>{card.points} Points</Button>
        <Card className="FinalText Final">
            {card.content.PollQuestion}
        <div className="FinalPollOptions">
            {card.content.options?.map((option)=>(<PollOptions option={option}/>))}
        </div>
        </Card>
        
    </div>
    
);
};