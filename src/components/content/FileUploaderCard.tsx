import React from 'react';
import Card from 'react-bootstrap/Card';
import 'antd/dist/antd.css';
import './fileUploaderCard.css'
import { Input, Button, InputNumber } from 'antd';
import { useState } from 'react';
import { DeleteOutlined,CloseOutlined } from '@ant-design/icons';
import {ReactComponent as PDFIcon} from '../../PDF.svg';

const {TextArea}=Input;


export interface FileUploaderProps{

    PDFFile?:string;
    PDFTitle?:string;
    PDFDescription?:string;
    removeTab:any;
    updateContentControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    updateContentCardControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    content?:content;
    card:contentCard;
    onClick:any;

}

export const FileUploaderCard: React.FC<FileUploaderProps> = ({onClick,card,removeTab,updateContentCardControl,updateContentControl,content}) =>
    {
        
      
        const uploadedFile : any = React.useRef();
    const fileUploader : any = React.useRef();
    const [value, setValue] = useState(content?.PDFFile?1:0); // integer state
    const [DocFile, setDocFile] = useState(content?.PDFFile);
    const[fileName,setName]=useState(content?.PDFName);
    const[fileSize,setSize] =useState(content?.PDFSize);
    
    const handleFileUpload = (e:any) => {
    const [file] = e.target.files;
    if (file) {

    const reader = new FileReader();
    const { current } = uploadedFile;

    reader.onload = x => {
        let blob:any = x?.target?.result?.toString();
        updateContentControl(1,card.id,"PDFFile",x?.target?.result?.toString())
        if(blob) setDocFile(blob);
        setValue(value => value + 1);
    }
    reader.readAsDataURL(file);
    updateContentControl(1,card.id,"PDFName",file.name)
    updateContentControl(1,card.id,"PDFSize",file.size)
    setName(fileName=>file.name);
    setSize(fileSize=>file.size);
    
    //setValue(value => value + 1);

    }

    };

    const deleteImage=()=>{
    updateContentControl(1,card.id,"PDFFile","")
    const { current } = uploadedFile;
    fileUploader.current.value=null;
     setValue(value => 0);

    }

    return(
    <div onMouseOver={onClick}>

            <input type="file" onChange={handleFileUpload} ref={fileUploader}
            style={{display: "none"}} />

        <Card className="ImageUpload">
            <div className="FileCard">

            { (value!=0) ?
                (<> <p className="FileName"> {fileName}</p> 
                <div className="fileSize">{fileSize} KBs</div>
                <Button className="FileView" type="primary" shape="round" size="small" href={DocFile} target="_blank">Open</Button>
                <Card.Text className="DeleteButton">
                    <Button className="DeleteIcon" type="primary" shape="circle" onClick={()=>deleteImage()} icon={<DeleteOutlined />} size="middle" /></Card.Text>
                        </>
                ):
                <Card.Text className="FileAddButton"><a onClick={()=> fileUploader.current.click()}>Add a PDF file</a>
                </Card.Text>
                }
            </div>
            <Card.Body>
                <TextArea className="FileTitle" bordered={false} placeholder="Title " onBlur={(x)=>updateContentControl(1,card.id,"PDFTitle",x.target.innerHTML)} defaultValue={content?.PDFTitle}  showCount maxLength={100} autoSize /></Card.Body>
                <hr/><Card.Body>
                <TextArea className="FileDesc" bordered={false} placeholder="Description" onBlur={(x)=>updateContentControl(1,card.id,"PDFDescription",x.target.innerHTML)}  defaultValue={content?.PDFDescription}  showCount maxLength={500} autoSize={{minRows:3}} />
            </Card.Body>
            <Card.Footer className="FooterButtons" style={{borderRadius:"0px 0px 15px 15px"}}>
            <Button disabled size="large">
                            <PDFIcon /></Button>
            <Button className="CloseButton" size="large" onClick={removeTab}><CloseOutlined /></Button>
            <InputNumber defaultValue={card.points} onChange={(e)=>updateContentCardControl(1,card.id,"points",e)} min={0} max={100} formatter={value => `${value} Points`} step={5} size="small" 
            style={{backgroundColor:"#EF6315", borderRadius:"5px", position: "absolute",right: "65px",bottom: "10px"}}/>
            </Card.Footer>
        </Card>
    </div>
    
    );
};              