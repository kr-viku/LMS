import React, { useState }  from 'react';
import './titleCard.css';
import { Input } from 'antd';

export interface TitleCardProps{

}

export const TitleCard: React.FC<TitleCardProps> = () => 
{
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');
    function handleTextChange(text:string) {
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
        <Input style={{fontSize:"25px"}} value={value} onChange={(e) =>handleTextChange(e.target.value)
            } />
            <label className={ isActive ? "Active" : ""}  >
                    Title
            </label>
            
        </div>
    </div>

);
        };