import React from 'react';
import {Button,Checkbox } from 'antd';
import './displayQuizOptions.css';


export interface DisplayQuizOptionsProps{

    option:quizOption;
    
}

export const DisplayQuizOptions: React.FC<DisplayQuizOptionsProps> = ({option}) =>{
    
    

    return(
    <div className="DisplayQuizOptions">
        <div className="Option">
        <Checkbox className="optionType" checked={option.OptionType} ></Checkbox> 
            <Button className={"optionTexts" +(option.OptionType?' DisplayRightOption ':' DisplayWrongOption ')} style={{width:"100%",margin:"5px"}}>{option.QuizNumber}. {option.OptionText}</Button>
        </div>
    </div>
    );
};