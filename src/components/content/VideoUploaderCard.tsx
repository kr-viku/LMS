import React from 'react';
import './videoUploaderCard.css';
import Card from 'react-bootstrap/Card';
import { Input, Button,InputNumber} from 'antd';
import { useState } from 'react';
import { DeleteOutlined,CloseOutlined} from '@ant-design/icons';
import {ReactComponent as VideoIcon} from '../../Video.svg';
import {ReactComponent as UploadIcon} from '../../Upload.svg';

const {TextArea}=Input;

export interface VideoUploadCardProps{
    VideoFile?:string;
    VideoCaption?:string;
    removeTab:any;
    updateContentControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    updateContentCardControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    content?:content;
    card:contentCard;
    onClick:any;

}

export const VideoUploadCard: React.FC<VideoUploadCardProps> = ({onClick,card,removeTab,content,updateContentCardControl,updateContentControl}) =>{

    const uploadedVideo : any = React.useRef();
    const videoUploader : any = React.useRef();
    const [value, setValue] = useState(content?.VideoFile?1:0); // integer state
    const [videoFile, setVideoFile] = useState(content?.VideoFile);
   // const useForceUpdate:any=()=>{

   // return () => setValue(value => value + 1); // update the state to force render
    //}
    const handleImageUpload = (e:any) => {
    const [file] = e.target.files;
    if (file) {

    const reader = new FileReader();
    const { current } = uploadedVideo;

    reader.onload = x => {
        let blob:any = x?.target?.result?.toString();
        updateContentControl(1,card.id,"VideoFile",x?.target?.result?.toString())
        if(blob) setVideoFile(blob);
        setValue(value => value + 1);
    }
    reader.readAsDataURL(file);
    //setValue(value => value + 1);

    }

    };

    const deleteImage=()=>{

    const { current } = uploadedVideo;
    videoUploader.current.value=null;
    if(current) current.src =
    "https://media.gettyimages.com/photos/white-studio-background-picture-id1040250650?b=1&k=6&m=1040250650&s=170667a&w=0&h=kV2o7n3pefhAitq9YiiTrxQotQEfJ98UGZ8fLEl1iCA=";
    setValue(value => 0);

    }
    return(
    <div onMouseOver={onClick}>
        <input type="file" accept="video/*" onChange={handleImageUpload} ref={videoUploader}
            style={{display: "none"}} />


        <Card >
            { (value!=0) ?
            (
            <video width="100%" height="100%" controls>
                <source src={ videoFile || content?.VideoFile?.toString() } type="video/mp4" />
                <source src={ videoFile || content?.VideoFile?.toString() } type="video/webm" />
                Your browser does not support the video tag.
            </video>
            ) :
            (<Card.Img className="Videocard"
                src="https://media.gettyimages.com/photos/white-studio-background-picture-id1040250650?b=1&k=6&m=1040250650&s=170667a&w=0&h=kV2o7n3pefhAitq9YiiTrxQotQEfJ98UGZ8fLEl1iCA="
                 alt="Image" />)
            }
            <Card.ImgOverlay>

                { (value!=0) ?
                <Card.Text className="DeleteButton"><Button className="DeleteIcon" type="primary" shape="circle" onClick={()=>deleteImage()} icon={<DeleteOutlined />} size="middle" /></Card.Text>
                :
                <Card.Text className="AddButton" style={{top:"60%"}}><a onClick={()=> videoUploader.current.click()}><UploadIcon className="UploadIcon"/> Add Video</a>
                </Card.Text>
                }
            </Card.ImgOverlay>
            <Card.Body>
            <TextArea className="VideoTitle" bordered={false} placeholder="Add Caption (Optional)" defaultValue={content?.VideoCaption || ""} onBlur={(e)=>updateContentControl(1,card.id,"VideoCaption",e && e.target && e.target.innerHTML)} showCount maxLength={100} autoSize/>
            </Card.Body>
            <Card.Footer className="FooterButtons" style={{borderRadius:"0px 0px 15px 15px"}}>
            <Button disabled size="large">
                            <VideoIcon /></Button>
            <Button className="CloseButton" size="large" onClick={removeTab}><CloseOutlined /></Button>
            <InputNumber defaultValue={card.points} onChange={(e)=>updateContentCardControl(1,card.id,"points",e)} min={0} max={100} formatter={value => `${value} Points`} step={5} size="small" 
            style={{backgroundColor:"#EF6315", borderRadius:"5px", position: "absolute",right: "65px",bottom: "10px"}}/>
            </Card.Footer>
        </Card>
    </div>
    );
};