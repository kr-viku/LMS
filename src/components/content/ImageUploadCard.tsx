import React from 'react';
import {CoverImage} from './CoverImage';
import Card from 'react-bootstrap/Card';
import { Input,Button,InputNumber } from 'antd';
import './imageUploadCard.css';
import { CloseOutlined } from '@ant-design/icons';
import {ReactComponent as ImageIcon} from '../../Image.svg';

const {TextArea}=Input;

export interface ImageUploadCardProps{

  
    removeTab:any;
    updateContentControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    updateContentCardControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    card:contentCard;
    onClick:any;
    
    
}

export const ImageUploadCard: React.FC<ImageUploadCardProps> = ({onClick,removeTab,updateContentControl,updateContentCardControl,card}) =>{

    return(
    <div className="ImageUploadCard" onMouseOver={onClick}>
        <Card className="ImageUpload">
            <CoverImage margin="0px" text="upload Image" ImageSrc={card.content?.ImageFile || ""} field={"ImageFile"} updateContentControl={updateContentControl} cardId={card.id} borderRadius="15px 15px 0px 0px"/>
            <Card.Body>
            <TextArea className="ImageTitle" bordered={false} placeholder="Add Caption (Optional)" onBlur={(e)=>updateContentControl(1,card.id,"ImageCaption",e && e.target && e.target.innerHTML)} defaultValue={card.content?.ImageCaption || ""}showCount maxLength={100} autoSize/>
            </Card.Body>
            <Card.Footer className="FooterButtons" style={{borderRadius:"0px 0px 15px 15px"}}>
            <Button disabled size="large">
                            <ImageIcon /></Button>
            <Button className="CloseButton" size="large" onClick={removeTab} ><CloseOutlined /></Button>
            <InputNumber defaultValue={card.points} onChange={(e)=>updateContentCardControl(1,card.id,"points",e)} min={0} max={100} formatter={value => `${value} Points`} step={5} size="small" 
            style={{backgroundColor:"#EF6315", borderRadius:"5px", position: "absolute",right: "65px",bottom: "10px"}}/>
            </Card.Footer>
            
        </Card>
    </div>
    );
};