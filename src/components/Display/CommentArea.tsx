import React from 'react';
import Card from 'react-bootstrap/Card';
import {  Input } from 'antd';
import './commentArea.css';

const{TextArea} =Input;

export interface CommentAreaProps{

card?:contentCard;
updateContentCardControl?: (lessonId: number,cardId:number,field:string,value:any) => void

}

export const CommentArea: React.FC<CommentAreaProps> = ({card,updateContentCardControl}) =>{

    return(
    <div className="CommentArea">
        <Card className="ImageUpload Comment">
            <TextArea placeholder="Add a comment" onBlur={(e)=>updateContentCardControl && updateContentCardControl(1,card?.id || -1,"comment",e.target.innerHTML)} defaultValue={card?.comment || "" } bordered={false} allowClear autoSize/>
        </Card>
    </div>
    );
    };