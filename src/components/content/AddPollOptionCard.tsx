import React from 'react';
import { Button} from 'antd';
import './addPollOptionCard.css';
import { PlusCircleOutlined } from '@ant-design/icons';



export interface AddPollOptionCardProps{

    addOption:any;
    
}

export const AddPollOptionCard: React.FC<AddPollOptionCardProps> = ({addOption}) =>{

    return(
    <div className="AddPollOptionCard" onClick={addOption}>
        <div className="Option">
        <span className="optionNumber"></span>
        <div className="OptionText">
        <Button className="AddButton" size="small" ><PlusCircleOutlined />Add Option</Button>
        </div>
        </div>
    </div>
    );
};