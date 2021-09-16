import React  from 'react';
import './timeLine.css';
//
import { shallowEqual,  useSelector } from "react-redux";
import { TimeLineItems } from './TimeLineItems';


export interface TimeLineProps{

}

export const TimeLine: React.FC<TimeLineProps> = (props) => {
  
    const lessons: readonly Lesson[] = useSelector(
        (state: LessonState) => state.lessons,
        shallowEqual
      )
      const ContentList: contentCard[] | undefined = lessons && lessons[0].contentCards;
 
  return(

    <TimeLineItems List={ContentList} />

);
};
