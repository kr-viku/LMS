import React from 'react';
import { ImageUploadCard } from './ImageUploadCard';
import { VideoUploadCard } from './VideoUploaderCard';
import { FileUploaderCard } from './FileUploaderCard';
import { LinkUploaderCard } from './LinkUploaderCard';
import './contentCard.css';
import { QuizCard } from './QuizCard';
import { PollCard } from './PollCard';
import { EditorText } from './EditorText';



export interface ContentCardProps {

  List: contentCard[] | undefined;
  updateContentControl: (lessonId: number,cardId:number,field:string,value:any) => void
  updateContentCardControl: (lessonId: number,cardId:number,field:string,value:any) => void
  setActive:(lessonId: number,cardId:number)=>void
  removeTab: any;
}

export const ContentCard: React.FC<ContentCardProps> = ({ List,setActive, removeTab,updateContentControl,updateContentCardControl}) => {


  



  return (
    <div className="contents">

      {
        List && List.map(
          (contents: contentCard) => {
            switch (contents.category) {
              case 'image':
                //addContent(contents.category,1);
                return (<ImageUploadCard card={contents} onClick={()=>setActive(1,contents.id)} updateContentCardControl={updateContentCardControl} updateContentControl={updateContentControl} removeTab={() => removeTab(contents.id)} />);
              case 'video':
                return (
                  <VideoUploadCard card={contents} onClick={()=>setActive(1,contents.id)} content={contents.content} updateContentCardControl={updateContentCardControl} updateContentControl={updateContentControl} removeTab={() => removeTab(contents.id)} />
                );
              case 'links':
                return (<LinkUploaderCard card={contents} onClick={()=>setActive(1,contents.id)} content={contents.content} updateContentCardControl={updateContentCardControl} updateContentControl={updateContentControl} removeTab={() => removeTab(contents.id)} />
                );
              case 'files':
                return (
                  <FileUploaderCard card={contents} onClick={()=>setActive(1,contents.id)} content={contents.content} updateContentCardControl={updateContentCardControl} updateContentControl={updateContentControl} removeTab={() => removeTab(contents.id)} />
                );
              case 'quiz':
                return (
                  <QuizCard card={contents} onClick={()=>setActive(1,contents.id)} content={contents.content} updateContentCardControl={updateContentCardControl} updateContentControl={updateContentControl} removeTab={() => removeTab(contents.id)} />
                );
              case 'poll':
                return (
                  <PollCard card={contents} onClick={()=>setActive(1,contents.id)} content={contents.content} updateContentCardControl={updateContentCardControl} updateContentControl={updateContentControl} removeTab={() => removeTab(contents.id)} />
                );
              case 'text':
                return (
                  <EditorText card={contents} onActive={()=>setActive(1,contents.id)} content={contents.content} updateContentCardControl={updateContentCardControl} updateContentControl={updateContentControl} removeTab={() => removeTab(contents.id)}/>
                );

            }
          }
        )
      }
    </div>
  );

};


