import React from 'react';
import Card from 'react-bootstrap/Card';
import './finalTitleCard.css';


export interface FinalTitleCardProps{

    Lesson:Lesson;

}

export const FinalTitleCard: React.FC<FinalTitleCardProps> = ({Lesson}) =>{
    return(
    <div className="FinalTitleCard">
        <Card className="FinalImage Finals">
            <Card.Img className="FinalImage"
                src={Lesson.CoverImage?.ImageSrc} />
            <Card.Body>
                {Lesson.TitleCard}
            </Card.Body>
        </Card>
        
    </div>
    
);
};