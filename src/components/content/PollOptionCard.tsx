import React from 'react';
import { Input,Button } from 'antd';

import { Dispatch } from "redux"
import {  useDispatch } from "react-redux"
import { updateOption } from "../../store/actionCreators"

import './pollOptionCard.css';
import { CloseOutlined } from '@ant-design/icons';

const {TextArea}=Input;

export interface PollOptionCardProps{

    option:any;
    removeOption: any;
    card_id:number;
    
}

export const PollOptionCard: React.FC<PollOptionCardProps> = ({option,removeOption,card_id}) =>{
    const dispatch: Dispatch<any> = useDispatch()

    const updateOptionControl = React.useCallback(
        (lessonId: number,cardId:number,optionId:number,field:string,value:any) => dispatch(updateOption (lessonId,cardId,optionId,field,value)),
        [dispatch, updateOption ]
      )

    return(
    <div className="PollOptionCard">
        <div className="Option">
            {/* <span className="optionNumber">{option.optionNumber+"."}</span> */}
            <TextArea className="optionText rightOption" bordered={true} placeholder="Add Option" onBlur={(e)=>updateOptionControl(1,card_id,option.id,"PollText",e.target.innerHTML)} defaultValue={option.PollText} showCount maxLength={100} autoSize/>
            {/* <Checkbox className="optionType" value={option.optionNumber}></Checkbox> */}
            <Button className="CloseButton" size="small" onClick={removeOption} ><CloseOutlined /></Button>
        </div>
    </div>
    );
};