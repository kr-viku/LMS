import React from 'react';
import Card from 'react-bootstrap/Card';
import './displayTitleCard.css';

export interface DisplayTitleCardProps{

Lesson?:Lesson

}

export const DisplayTitleCard: React.FC<DisplayTitleCardProps> = ({Lesson}) =>{

    
    return(
    <div className="DisplayTitleCard">
        <Card className="ImageUpload Display">
            <Card.Img className="DisplayImage"
                src={Lesson?.CoverImage?.ImageSrc} />
            <Card.Body>
            <div className="DisplayTitle">
                {Lesson?.TitleCard}
            </div>
            </Card.Body>
        </Card>
    </div>
    );
    };