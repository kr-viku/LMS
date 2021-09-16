import React from 'react';
import './coverImage.css';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import {Button} from 'antd';
import {ReactComponent as UploadIcon} from '../../Upload.svg';
import {ReactComponent as CoverImageIcon} from '../../CoverImage.svg';


export interface CoverImageProps{

    margin?: string;
    text?: string;
    height?:string;
    width?:string;
    borderTopRightRadius?:string;
    borderTopLeftRadius?:string;
    borderRadius?:string;
    ImageSrc?:string;
    updateContentControl?:(lessonId: number,cardId:number,field:string,value:any) => void
    updateCoverImage?:(lessonId: number,field:string,value:any) => void
    cardId?:number
    field?:string
    


}

export const CoverImage: React.FC<CoverImageProps> = ({field,margin,text='Add a cover Image',height,width,borderTopLeftRadius,borderTopRightRadius,borderRadius,updateContentControl,ImageSrc,updateCoverImage,cardId}) =>
    {
        const uploadedImage : any = React.useRef();
        const imageUploader : any = React.useRef();
        const [value, setValue] = useState(ImageSrc?1:0); // integer state
        
  const handleImageUpload = (e:any) => {
    const [file] = e.target.files;
    if (file) {
       
      const reader = new FileReader();
      const { current } = uploadedImage;
      if(current){
       
      current.file = file;
      reader.onload = e => {
      //if(current) current.src = e && e.target && e.target.result;
      if(updateCoverImage){
        updateCoverImage(1,"ImageSrc",e && e.target && e.target.result)
      }else{
        updateContentControl && updateContentControl(1,cardId || -1,field || "ImageFile",e && e.target && e.target.result);
      }
      };
    }
     reader.readAsDataURL(file);
    setValue(value => value + 1);
     
    }

  };

  const deleteImage=()=>{
    if(updateCoverImage){
      updateCoverImage(1,"ImageSrc","")
    }else{
      updateContentControl && updateContentControl(1,cardId || -1,"ImageFile","");
    }
    
    //   const { current } = uploadedImage;
    //   imageUploader.current.value=null;
    // if(current) current.src = "https://media.gettyimages.com/photos/white-studio-background-picture-id1040250650?b=1&k=6&m=1040250650&s=170667a&w=0&h=kV2o7n3pefhAitq9YiiTrxQotQEfJ98UGZ8fLEl1iCA=";
      setValue(value => 0); 
    
  }
        return(
            <div>
                <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader}
                style={{display: "none"}}
                />
                
                
                <Card  style={{margin,height,width}}>
               
                <Card.Img src={ImageSrc || "https://media.gettyimages.com/photos/white-studio-background-picture-id1040250650?b=1&k=6&m=1040250650&s=170667a&w=0&h=kV2o7n3pefhAitq9YiiTrxQotQEfJ98UGZ8fLEl1iCA="} ref={uploadedImage} alt="Image"
                style={{borderRadius}}/>
                        <Card.ImgOverlay> 
                        
                        { (value!=0) ? 
                        <Card.Text className="DeleteButton">
                          <Button className="DeleteIcon" type="primary" shape="circle" onClick={()=>deleteImage()} icon={<DeleteOutlined />} size="middle" />
                        </Card.Text>
                      :
                    (<div>
                      <div><CoverImageIcon/></div><div>1280*720</div>
                    <Card.Text className="AddButton"><a onClick={() => imageUploader.current.click()}><UploadIcon className="UploadIcon"/> {text}</a></Card.Text>
                    </div>)   
                }
                </Card.ImgOverlay>
                        </Card>  
            </div>
        );
    };
