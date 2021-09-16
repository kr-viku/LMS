import React from 'react';
import { Button } from 'antd';
import './customOptionCard.css';


export interface CustomOptionCardProps{

    toggleCustomOption:any;
    enabled:boolean;
    
}

export const CustomOptionCard: React.FC<CustomOptionCardProps> = ({toggleCustomOption,enabled}) =>{

    return(
    <div className="CustomOptionCard" onClick={toggleCustomOption}>
        <div className="Option">
        <span className="optionNumber"></span>
        <div className="OptionText">
        <Button className="AddButton" size="small" >
            {enabled?"Custom Answer Enabled":"Custom Answer Disabled"}
        </Button>
        </div>
        </div>
    </div>
    );
};