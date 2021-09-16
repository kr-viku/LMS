import React from 'react';
import './webLayout.css';
import { Layout } from 'antd';
import { Button } from './Button';
import { TitleCard } from './content/TitleCard';
import { CoverImage } from './content/CoverImage';
import { MainHeader } from './Header';
import {TimeLine}from './TimeLine';
import {CollaborationCard} from './CollaborationCard';
import { TabCard } from './content/TabCard';

import { Dispatch } from "redux"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { updateCoverImage,updateLesson, updateTotal } from "../store/actionCreators"


const { Content, Sider, Header } = Layout;

export interface WebLayoutProps {
  addLessonControl: (lesson:Lesson) => void

}


export const WebLayout: React.FC<WebLayoutProps> = ({addLessonControl}) => {

  

  const lessons: readonly Lesson[] = useSelector(
    (state: LessonState) => state.lessons,
    shallowEqual
  )
  const Lesson: Lesson | undefined = lessons && lessons[0];

  const dispatch: Dispatch<any> = useDispatch()

  const updateCoverImageControl = React.useCallback(
    (lessonId: number,field:string,value:any) => dispatch(updateCoverImage(lessonId,field,value)),
    [dispatch, updateCoverImage]
  )

  const updateLessonControl = React.useCallback(
    (lessonId: number,field:string,value:any) => dispatch(updateLesson(lessonId,field,value)),
    [dispatch, updateLesson]
  )

  const updateTotalControl = React.useCallback(
    (lessonId: number) => dispatch(updateTotal(lessonId)),
    [dispatch, updateTotal]
  )

  return(
  <Layout style={{ backgroundColor: 'transparent' }}>
    <Header><MainHeader
      onLogin={() => {
        console.log('back');
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
            <div className="column" style={{ float: 'left', width: '60%', textAlign:"left" }} >Lesson Preview
            </div>
            <div className="column points">
              <Button backgroundColor="#EF6315" size="extra small" 
               //onClick={() => addLessonControl({id:2,totalPoint:0})} 
               onClick={() => updateTotalControl(1)} boxShadow="transparent"
               label={Lesson.totalPoint+" points"} />
            </div>
          </div>
        </Sider>
        <Content className="HeaderContent">Lesson Content</Content>
        <Sider className="HeaderSider" width={'25%'} style={{padding: "0px 25px",textAlign: "left"}}>Collaboration</Sider>
        
        
      </Layout>

      <Layout style={{ backgroundColor: 'transparent' }}>
        <Sider className="TimeLineSider" width={'25%'}>
          <TimeLine></TimeLine>
        </Sider>
        
        <Content>
          <TitleCard updateLesson={updateLessonControl} TitleInput={Lesson.TitleCard}/><CoverImage ImageSrc={Lesson.CoverImage?.ImageSrc} updateCoverImage={updateCoverImageControl} /><TabCard/>
        </Content>
        
        

        
        <Sider className="CollabSider" width={'25%'}>
          <Layout>
            <CollaborationCard></CollaborationCard>
          </Layout> 
        </Sider>
      </Layout>
    </Layout>
  </Layout>
    
  );
};
