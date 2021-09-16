import React from 'react';
import {Button } from 'antd';
import './displayPollOptions.css';


export interface DisplayPollOptionsCardProps{

    option:pollOption;
    
}

export const DisplayPollOptionsCard: React.FC<DisplayPollOptionsCardProps> = ({option}) =>{

    return(
    <div className="DisplayPollOptionsCard">
        <div className="Option">
            <Button className="optionTexts" style={{width:"100%",margin:"5px"}}>{option.PollText}</Button>
        </div>
    </div>
    );
};