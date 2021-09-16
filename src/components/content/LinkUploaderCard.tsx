import React from 'react';
import Card from 'react-bootstrap/Card';
import './linkUploaderCard.css';
import 'antd/dist/antd.css';
import { Button, Input, InputNumber} from 'antd';
import { DeleteOutlined,CloseOutlined } from '@ant-design/icons';
import {CoverImage} from './CoverImage';
import { useState } from 'react';
import {ReactComponent as LinkIcon} from '../../Link.svg';


const {TextArea,Search}=Input;


export interface LinkUploaderProps{

    LinkTitle?:string;
    LinkDescription?:string;
    Link?:string;
    removeTab:any;
    updateContentControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    updateContentCardControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    content?:content;
    card:contentCard;
    onClick:any;

}

export const LinkUploaderCard: React.FC<LinkUploaderProps> = ({onClick,card,removeTab,updateContentCardControl,updateContentControl,content}) =>
    {
        const [value, setValue] = useState(content?.Link?1:0); // integer state  
        const[fileName,setName]=useState(content?.Link);
      //var linkURL="";
        
    const onAdd=(value:any)=>{
        console.log(value);
        updateContentControl(1,card.id,"Link",value)
     setName(fileName=>value);
     setValue(value => value + 1);
     console.log(fileName);
 }
    const deleteImage=()=>{
        updateContentControl(1,card.id,"Link","")
    setValue(value => 0);
    }

    return(
    <div onMouseOver={onClick}>

        <Card className="ImageUpload">
            <div className="FileCard">

            { (value!=0) ?
                (<> <p className="LinkName"> {fileName}</p> 
                <Button className="LinkView" type="primary" shape="round" size="small" href={fileName} target="_blank">Open</Button>
                <Card.Text className="DeleteButton">
                    
                <Button className="DeleteIcon" type="primary" shape="circle" onClick={()=>deleteImage()} icon={<DeleteOutlined />} size="middle" /> </Card.Text>
                        </>
                ):
                <Card.Text className="LinkAddButton"><Search
                placeholder="Add a URL"
                allowClear
                enterButton="Add"
                size="small"
                onSearch={onAdd}
                defaultValue={content?.Link}
              />
                </Card.Text>
                }
            </div>
            <Card.Body>
                <TextArea className="LinkTitle" bordered={false} placeholder="Title " onBlur={(e)=>updateContentControl(1,card.id,"LinkTitle",e.target.innerHTML)} defaultValue={content?.LinkTitle} showCount maxLength={100} autoSize /></Card.Body>
                <hr/><Card.Body>
                <TextArea className="LinkDesc" bordered={false} placeholder="Description" onBlur={(e)=>updateContentControl(1,card.id,"LinkDescription",e.target.innerHTML)} defaultValue={content?.LinkDescription}  showCount maxLength={500} autoSize={{minRows:3}} />
                <CoverImage ImageSrc={content?.LinkImageFile || ""} updateContentControl={updateContentControl} field={"LinkImageFile"} cardId={card.id} margin="0px" text="upload Image" height="100%" width="100%" borderRadius="0px" />
            </Card.Body>
            <Card.Footer className="FooterButtons" style={{borderRadius:"0px 0px 15px 15px"}}>
            <Button disabled size="large">
                            <LinkIcon/></Button>
            <Button className="CloseButton" size="large" onClick={removeTab}><CloseOutlined /></Button>
            <InputNumber defaultValue={card.points} onChange={(e)=>updateContentCardControl(1,card.id,"points",e)} min={0} max={100} formatter={value => `${value} Points`} step={5} size="small" 
            style={{backgroundColor:"#EF6315", borderRadius:"5px", position: "absolute",right: "65px",bottom: "10px"}}/>
            </Card.Footer>
        </Card>
    </div>
    
    );
};                                      