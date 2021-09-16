import React from 'react';
import Card from 'react-bootstrap/Card';
import './tabCard.css';
import { useState } from 'react';
import { Button,Tooltip } from 'antd';
import { Dispatch } from "redux"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { addContentCard,updateContent,deleteContentCard,updateContentCard, setActive } from "../../store/actionCreators"
import { ContentCard } from './ContentCard';
import { PlusOutlined} from '@ant-design/icons';
import {ReactComponent as TextIcon} from '../../text.svg';
import {ReactComponent as PollIcon} from '../../Poll.svg';
import {ReactComponent as QuizIcon} from '../../Quiz.svg';
import {ReactComponent as VideoIcon} from '../../Video.svg';
import {ReactComponent as ImageIcon} from '../../Image.svg';
import {ReactComponent as PDFIcon} from '../../PDF.svg';
import {ReactComponent as LinkIcon} from '../../Link.svg';




export interface TabCardProps{

}

export const TabCard: React.FC<TabCardProps> = (props) =>{
    const [value, setValue] = useState(0);
    const [list, setList]=useState([] as any);

    const lessons: readonly Lesson[] = useSelector(
        (state: LessonState) => state.lessons,
        shallowEqual
      )
      const ContentList: contentCard[] | undefined = lessons && lessons[0].contentCards;

    const dispatch: Dispatch<any> = useDispatch()

  const addContent = React.useCallback(
    (category: string, lessonId: number) => dispatch(addContentCard(category,lessonId)),
    [dispatch, addContentCard]
  )

  const updateContentControl = React.useCallback(
    (lessonId: number,cardId:number,field:string,value:any) => dispatch(updateContent(lessonId,cardId,field,value)),
    [dispatch, updateContent]
  )

  const updateContentCardControl = React.useCallback(
    (lessonId: number,cardId:number,field:string,value:any) => dispatch(updateContentCard(lessonId,cardId,field,value)),
    [dispatch, updateContentCard]
  )

  const deleteContentControl = React.useCallback(
    (lessonId: number,cardId:number) => dispatch(deleteContentCard(lessonId,cardId)),
    [dispatch, deleteContentCard]
  )

  const setActiveControl = React.useCallback(
    (lessonId: number,cardId:number) => dispatch(setActive(lessonId,cardId)),
    [dispatch, setActive]
  )

    function callback(tab:string) {
    setList(list.concat(tab));
    setValue(value => value + 1);
    list.forEach((element:string) => {
    console.log(element);
    });
    console.log("length-"+list.length);

    }

   const removeTab=(id:number)=>{
    deleteContentControl(1,id);
    //    let newList = list;
    //    list.splice(index,1);
    //     setList(list);
    //     setValue(value => value - 1);
    }
    return(
    <>
    
        <ContentCard List={ContentList} setActive={setActiveControl} updateContentCardControl={updateContentCardControl} updateContentControl={updateContentControl} removeTab={removeTab}/>
        
        <div>

            <Card className="AddItemsCard">
            <Tooltip placement="bottom" title="Click on the below buttons" >
                <Card.Body className="TabBody">
                    <PlusOutlined />
                </Card.Body>
                </Tooltip>
                <Card.Footer className="FooterButtons" style={{paddingTop:"3px"}}>
                    <Tooltip placement="bottom" title="Add Text">
                        <Button onClick={()=> addContent('text',1)} size="large" >
                            <TextIcon /></Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Add Image">
                        <Button onClick={()=> addContent("image",1)} size="large">
                            <ImageIcon /></Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Add Video">
                        <Button onClick={()=> addContent('video',1)} size="large">
                            <VideoIcon /></Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Add PDF">
                        <Button onClick={()=> addContent('files',1)} size="large" >
                            <PDFIcon /></Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Add Link">
                        <Button onClick={()=> addContent('links',1)} size="large" >
                            <LinkIcon/></Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Add Poll">
                        <Button onClick={()=> addContent('poll',1)} size="large" >
                            <PollIcon /></Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Add Quiz">
                        <Button onClick={()=> addContent('quiz',1)} size="large" >
                        <QuizIcon /></Button>
                    </Tooltip>
                </Card.Footer>
            </Card>
        </div>
    </>
    );

    };