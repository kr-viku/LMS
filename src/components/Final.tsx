import React from 'react';
import { Layout } from 'antd';
import { FinalTitleCard } from './Final/FinalTitleCard';
import { FinalContentCard } from './FinalContent';
import { shallowEqual, useSelector } from 'react-redux';

const { Content } = Layout;

export interface FinalProps {

}


export const Final: React.FC<FinalProps> = () => {
  const lessons: readonly Lesson[] = useSelector(
    (state: LessonState) => state.lessons,
    shallowEqual
  )

  const Lesson: Lesson | undefined = lessons && lessons[0];
  
  const ContentList: contentCard[] | undefined = lessons && lessons[0].contentCards;
  

  return(
  <Layout style={{ backgroundColor: 'transparent' }}>
     

  <Content>
    <FinalTitleCard Lesson={Lesson}/><FinalContentCard List={ContentList}/>
  </Content>
  </Layout>
  );
};
