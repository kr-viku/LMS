import React from 'react';
import { Layout } from 'antd';
import { Button } from './Button';
import { MainHeader } from './Header';
import {TimeLine}from './TimeLine';
import { DisplayTitleCard } from './Display/DisplayTitleCard';
import { Dispatch } from "redux"
import { ContentCard } from './SubmitContent';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {  updateTotal } from "../store/actionCreators"


const { Content, Sider, Header } = Layout;

export interface SubmitProps {
  addLessonControl: (lesson:Lesson) => void

}


export const Submit: React.FC<SubmitProps> = ({addLessonControl}) => {
  const lessons: readonly Lesson[] = useSelector(
    (state: LessonState) => state.lessons,
    shallowEqual
  )

  const Lesson: Lesson | undefined = lessons && lessons[0];
  
  const ContentList: contentCard[] | undefined = lessons && lessons[0].contentCards;

  const dispatch: Dispatch<any> = useDispatch()

  const updateTotalControl = React.useCallback(
    (lessonId: number) => dispatch(updateTotal(lessonId)),
    [dispatch, updateTotal]
  )

  return(
  <Layout style={{ backgroundColor: 'transparent' }}>
    <Header><MainHeader
      onLogin={() => {
        console.log('1');
      }}
      onSubmit={() => {
        console.log('submit');
      }}
      onLogout={() => console.log("Create Account")}
    />
    </Header>
    <Layout style={{ backgroundColor: 'transparent' }}>

      <Layout className="Header" style={{ backgroundColor: 'transparent' }}>
        <Sider className="HeaderSider" width={'25%'} >
          <div className="row siderRow">
            <div className="column" style={{ float: 'left', width: '60%', textAlign:"left"  }} >Lesson Preview
            </div>
            <div className="column points">
            <Button backgroundColor="#EF6315" size="extra small" boxShadow="transparent"
               //onClick={() => addLessonControl({id:2,totalPoint:0})} 
               onClick={() => updateTotalControl(1)} 
               label={Lesson.totalPoint+" points"} />
            </div>
          </div>
        </Sider>
        <Content className="HeaderContent">Lesson Content</Content>
        
        <Sider className="HeaderSider" width={'25%'} style={{padding: "0px 25px",textAlign: "left"}}>Comments</Sider>
        
      </Layout>

      <Layout style={{ backgroundColor: 'transparent' }}>
        <Sider className="TimeLineSider" width={'25%'}>
          <TimeLine></TimeLine>
        </Sider>
        
        <Content>
         <DisplayTitleCard Lesson={lessons && lessons[0]}/><ContentCard List={ContentList}/>
         {/* <DisplayQuizCard/> */}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    
  );
};
