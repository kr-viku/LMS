import React from 'react';
import {Button } from 'antd';
import './pollOptions.css';


export interface PollOptionsProps{

    option:pollOption;
    
}

export const PollOptions: React.FC<PollOptionsProps> = ({option}) =>{

    return(
    <div className="PollOptions">
        <div className="Option">
            <Button className="optionTexts" style={{width:"100%",margin:"5px"}}>{option.PollText}</Button>
        </div>
    </div>
    );
};