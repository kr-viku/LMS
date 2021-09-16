import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'antd';
import './finalQuizCard.css';
import { QuizOptions} from './QuizOptions'


export interface FinalQuizCardProps{

    card:contentCard;

}

export const FinalQuizCard: React.FC<FinalQuizCardProps> = ({card}) =>{

    const [submitState, setsubmitState] =React.useState(false);
    const onSubmit = () => setsubmitState(!submitState);

    return(
    <div className="FinalQuizCard">
        <Button className="FinalPoints" size="small"
                    style={{backgroundColor:"#EF6315", borderRadius:"5px"}}>{card.points} Points</Button>
        <Card className="FinalText Final">
            {card.content.QuizQuestion}
        <div className="FinalQuizOptions">
            {card.content?.options?.map((option)=>(<QuizOptions option={option} isSubmit={submitState}/>))}
        </div>
        <Card.Body>
            {
                submitState?
                (
                    <div>
                    <p style={{fontSize:"10px"}}>Correct Answer explanation</p>
                    {card.content.QuizExplanation}
                    </div>
                )
                :
                (
                    <Button onClick={onSubmit} className="QuizSubmit"> Submit </Button>
                )
            }
        </Card.Body>
        </Card>
        
    </div>
    
);
};