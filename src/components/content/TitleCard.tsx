import React, { useState }  from 'react';
import './titleCard.css';
import { Input } from 'antd';

export interface TitleCardProps{

    TitleInput?:string;
    updateLesson:(lessonId:number,field:string,value:any)=>any;
}

export const TitleCard: React.FC<TitleCardProps> = ({TitleInput,updateLesson}) => 
{
    const [isActive, setIsActive] = useState(!!TitleInput || false);
    const [value, setValue] = useState(TitleInput || '');
    
    const MaxLength=100;
    function handleTextChange(text:string) {
        updateLesson(1,"TitleCard",text);
    setValue(text);
    if (text !== '') {
    setIsActive(true);
        } else {
        setIsActive(false);
        }
    }

return(

    <div className="TitleCard">
        <div id="float-label">
        <Input style={{fontSize:"20px"}} value={value} onChange={(e) =>handleTextChange(e.target.value)} />
            <label className={ isActive ? "Active" : ""} style={{width:"100%"}}  >
                <div className="row">
                <div className="column title"> Title</div>   
                <div className="column CharCount">{value.length}/{MaxLength}</div>
                </div>
                
            </label>
            
        </div>
    </div>

);
        };