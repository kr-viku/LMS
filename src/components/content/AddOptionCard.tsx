import React from 'react';
import { Button } from 'antd';
import './addOptionCard.css';
import { PlusCircleOutlined } from '@ant-design/icons';



export interface AddOptionCardProps{

    addOption:any;
    
}

export const AddOptionCard: React.FC<AddOptionCardProps> = ({addOption}) =>{

    return(
    <div className="AddOptionCard" onClick={addOption}>
        <div className="Option">
        <span className="optionNumber"></span>
        <div className="OptionText">
        <Button className="AddButton" size="small" ><PlusCircleOutlined />Add Option</Button>
        </div>
        </div>
    </div>
    );
};