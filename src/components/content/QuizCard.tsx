import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Input,Button,InputNumber } from 'antd';

import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { addQuizOption,removeQuizOption } from "../../store/actionCreators"

import './quizCard.css';
import {CloseOutlined } from '@ant-design/icons';

import { OptionCard } from './OptionCard';
import { AddOptionCard } from './AddOptionCard';
import {ReactComponent as QuizIcon} from '../../Quiz.svg';

const {TextArea}=Input;

export interface QuizCardProps{
    removeTab:any;
    content:content;
    updateContentControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    updateContentCardControl:(lessonId: number,cardId:number,field:string,value:any) => void;
    card:contentCard;
    onClick:any;
}

export const QuizCard: React.FC<QuizCardProps> = ({onClick,card,removeTab,content,updateContentCardControl,updateContentControl}) =>{

    //const [value, setValue] = useState(0);
    //const [options, setOptions] = useState([] as any);

    const dispatch: Dispatch<any> = useDispatch()

    const addQuizOptionControl = React.useCallback(
        (lessonId: number,cardId:number) => dispatch(addQuizOption (lessonId,cardId)),
        [dispatch, addQuizOption ]
      )

      const removeQuizOptionControl = React.useCallback(
        (lessonId: number,cardId:number,optionId:number) => dispatch(removeQuizOption (lessonId,cardId,optionId)),
        [dispatch, removeQuizOption ]
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
        addQuizOptionControl(1,card.id)
        // let previousNumber = options.length >0 && options[options.length-1].optionNumber || "";
        // let option = {optionNumber:nextChar(previousNumber),answer:true};
        // let newOptions = [...options,option];
        // setOptions(newOptions);
        //setValue(value=> value + 1);
    }

    const removeOption =(i:number)=>{
        removeQuizOptionControl(1,card.id,i)
        // let newList = options;
        // options.splice(i,1);
        // setOptions(options);
        // setValue(value => value - 1);

    }

    return(
    <div className="QuizCard" onMouseOver={onClick}>
        <Card className="ImageUpload">
            <Card.Body>
            <TextArea className="QuizQuestion" onBlur={(e)=>updateContentControl(1,card.id,"QuizQuestion",e.target.innerHTML)} defaultValue={content.QuizQuestion} bordered={false} placeholder="Type Quiz Question Here..." showCount maxLength={150} autoSize/>

            <div className="OptionList">
            {content?.options?.map((e: quizOption,i:number)=>(<OptionCard card_id={card.id} option={e} removeOption={()=>removeOption(e.id)} />))}
                        <AddOptionCard addOption={addOption}/>

            </div>
            <TextArea className="QuizExplanation" bordered={false} onBlur={(e)=>updateContentControl(1,card.id,"QuizExplanation",e.target.innerHTML)} defaultValue={content.QuizExplanation} placeholder="Corrent Option Explanation" showCount maxLength={500} autoSize/>
            </Card.Body>
            <Card.Footer className="FooterButtons" style={{borderRadius:"0px 0px 15px 15px"}}>
            <Button disabled size="large">
            <QuizIcon /></Button>
            <Button className="CloseButton" size="large" onClick={removeTab} ><CloseOutlined /></Button>
            <InputNumber defaultValue={card.points} onChange={(e)=>updateContentCardControl(1,card.id,"points",e)} min={0} max={100} formatter={value => `${value} Points`} step={5} size="small" 
            style={{backgroundColor:"#EF6315", borderRadius:"5px", position: "absolute",right: "65px",bottom: "10px"}}/>
            </Card.Footer>
            
        </Card>
        
    </div>
    );
};