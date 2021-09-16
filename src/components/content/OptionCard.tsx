import React, {useState}from 'react';
import { Input,Button, Checkbox } from 'antd';

import { Dispatch } from "redux"
import {  useDispatch} from "react-redux"
import { updateOption } from "../../store/actionCreators"

import './optionCard.css';
import {CloseOutlined } from '@ant-design/icons';

const {TextArea}=Input;

export interface OptionCardProps{

    option:any;
    removeOption: any;
    card_id:number;
    
}

export const OptionCard: React.FC<OptionCardProps> = ({option,removeOption,card_id}) =>{
    const [checked, setChecked]=useState(option.OptionType);
    function onClick(){
        setChecked((checked: any)=>!checked);
    }
    const dispatch: Dispatch<any> = useDispatch()

    const updateOptionControl = React.useCallback(
        (lessonId: number,cardId:number,optionId:number,field:string,value:any) => dispatch(updateOption (lessonId,cardId,optionId,field,value)),
        [dispatch, updateOption ]
      )

    return(
    <div className="OptionCard">
        <div className="Option">
            <span className="optionNumber">{option.QuizNumber+"."}</span>
            <TextArea className={"optionText" +(checked?' rightOption ':' wrongOption ')} bordered={true} onBlur={(e)=>updateOptionControl(1,card_id,option.id,"OptionText",e.target.innerHTML)} defaultValue={option.OptionText} placeholder="Add Option" showCount maxLength={100} autoSize/>
            <Checkbox className="optionType" onClick={onClick} checked={option.OptionType} onChange={(e)=>updateOptionControl(1,card_id,option.id,"OptionType",e.target.checked)}></Checkbox>
            <Button className="CloseButton" size="small" onClick={removeOption} ><CloseOutlined /></Button>
        </div>
    </div>
    );
};