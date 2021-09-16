import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Input,Button,InputNumber } from 'antd';

import { Dispatch } from "redux"
import {  useDispatch } from "react-redux"
import { addPollOption,removePollOption } from "../../store/actionCreators"

import './pollCard.css';
import { CloseOutlined } from '@ant-design/icons';

import { PollOptionCard } from './PollOptionCard';
import { AddPollOptionCard } from './AddPollOptionCard';
import { CustomOptionCard } from './CustomOptionCard';
import {ReactComponent as PollIcon} from '../../Poll.svg';

const {TextArea}=Input;

export interface PollCardProps{
    removeTab:any;
    content:content;
    updateContentControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    updateContentCardControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    card:contentCard;
    onClick:any;
    
}

export const PollCard: React.FC<PollCardProps> = ({onClick,card,removeTab,content,updateContentCardControl,updateContentControl}) =>{

    //const [value, setValue] = useState(0);
    //const [options, setOptions] = useState([] as any);
    const [enabled, setEnabled] = useState(false);

    const dispatch: Dispatch<any> = useDispatch()

    const addPollOptionControl = React.useCallback(
        (lessonId: number,cardId:number) => dispatch(addPollOption (lessonId,cardId)),
        [dispatch, addPollOption ]
      )

      const removePollOptionControl = React.useCallback(
        (lessonId: number,cardId:number,optionId:number) => dispatch(removePollOption (lessonId,cardId,optionId)),
        [dispatch, removePollOption ]
      )

    function nextChar(str: string): string {
        if (str.length === 0) {
            return 'a';
        }
        var charA = str.split('');
        if (charA[charA.length - 1] === 'z') {
            return nextChar(str.substring(0, charA.length - 1)) + 'a';
        } else {
            return str.substring(0, charA.length - 1) +
                String.fromCharCode(charA[charA.length - 1].charCodeAt(0) + 1);
        }
        };
        

    const addOption =()=>{
        addPollOptionControl(1,card.id)
        // let previousNumber = options.length >0 && options[options.length-1].optionNumber || "";
        // let option = {optionNumber:nextChar(previousNumber),answer:true};
        // let newOptions = [...options,option];
        // setOptions(newOptions);
        //setValue(value=> value + 1);
    }

    const removeOption =(i:number)=>{
        removePollOptionControl(1,card.id,i)
        // let newList = options;
        // options.splice(i,1);
        // setOptions(options);
        // setValue(value => value - 1);

    }

    const toggleCustomOption = () =>{
        updateContentControl(1,card.id,"CustomAnswer",!enabled);
        setEnabled(!enabled)
        console.log("toggle");
    }

    return(
    <div className="PollCard" onMouseOver={onClick}>
        <Card className="ImageUpload">
            <Card.Body>
            <TextArea className="PollQuestion" bordered={false} onBlur={(e)=>updateContentControl(1,card.id,"PollQuestion",e.target.innerHTML)} placeholder="Type Poll Question Here..."  defaultValue={content.PollQuestion} showCount maxLength={150} autoSize/>

            <div className="OptionList">
            {content?.options?.map((e: pollOption,i:number)=>(<PollOptionCard card_id={card.id} option={e} removeOption={()=>removeOption(e.id)} />))}
                        <CustomOptionCard toggleCustomOption={toggleCustomOption} enabled={!!content?.CustomAnswer}/>
                        <AddPollOptionCard addOption={addOption}/>

            </div>
            {/* <TextArea className="PollExplanation" bordered={false} placeholder="Corrent Option Explanation" showCount maxLength={500} autoSize/> */}
            </Card.Body>
            <Card.Footer className="FooterButtons" style={{borderRadius:"0px 0px 15px 15px"}}>
            <Button disabled size="large">
            <PollIcon /></Button>
            <Button className="CloseButton" size="large" onClick={removeTab} ><CloseOutlined /></Button>
            <InputNumber defaultValue={card.points} onChange={(e)=>updateContentCardControl(1,card.id,"points",e)} min={0} max={100} formatter={value => `${value} Points`} step={5} size="small" 
            style={{backgroundColor:"#EF6315", borderRadius:"5px", position: "absolute",right: "65px",bottom: "10px"}}/>
            </Card.Footer>
            
        </Card>
        
    </div>
    );
};