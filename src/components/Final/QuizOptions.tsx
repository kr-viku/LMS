import React from 'react';
import {Button,Checkbox } from 'antd';
import './quizOptions.css';


export interface QuizOptionsProps{

    option:quizOption;
    isSubmit:boolean;
    
}

export const QuizOptions: React.FC<QuizOptionsProps> = ({option,isSubmit}) =>{

    const [checked, setchecked]=React.useState(false);

    const onCheck=() => setchecked(!checked);

    return(
    <div className="QuizOptions">
        <div className="Option">
        <Checkbox className={"optionType"+( isSubmit && option.OptionType? ' ShowRightAnswers ':(isSubmit && !option.OptionType? ' ShowWrongAnswers ':''))} checked={checked} disabled={isSubmit} onClick={onCheck}  ></Checkbox> 
            <Button className={"optionTexts"+( isSubmit && option.OptionType? ' ShowRightAnswers ':(isSubmit && !option.OptionType? ' ShowWrongAnswers ':''))} style={{width:"100%",margin:"5px"}} onClick={onCheck}>{option.OptionText}</Button>
        </div>
        
    </div>
    );
};