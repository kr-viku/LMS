import React  from 'react';
import './timeLine.css';
import './timelineItems.css'
import { DisplayCard } from './DisplayCard';
import { Timeline } from 'antd';
import {ReactComponent as TextIcon} from '../text.svg';
import {ReactComponent as PollIcon} from '../Poll.svg';
import {ReactComponent as QuizIcon} from '../Quiz.svg';
import {ReactComponent as VideoIcon} from '../Video.svg';
import {ReactComponent as ImageIcon} from '../Image.svg';
import {ReactComponent as PDFIcon} from '../PDF.svg';
import {ReactComponent as LinkIcon} from '../Link.svg';

export interface TimeLineItemsProps{

    List: contentCard[] | undefined;
}

export const TimeLineItems: React.FC<TimeLineItemsProps> = ({ List}) => { 
    
    return(
<Timeline>
        {
            List && List.map(
              (contents: contentCard,i:number) => {
                switch (contents.category) {
                  case 'image':
                    //addContent(contents.category,1);
                    return (<Timeline.Item className={contents.active?'Active':''} dot={<ImageIcon style={{ fontSize: '1.3rem',marginTop:"10px", backgroundColor:"blue"}} />}><DisplayCard category={contents.category} content={contents.content.ImageFile} /></Timeline.Item>
                   );
                  case 'video':
                    return (<Timeline.Item className={contents.active?'Active':''} dot={<VideoIcon style={{ fontSize: '1.3rem',marginTop:"10px" }} />}><DisplayCard category={contents.category} content={contents.content.VideoFile} /></Timeline.Item>
                    );
                  case 'links':
                    return (<Timeline.Item className={contents.active?'Active':''} dot={<LinkIcon style={{ fontSize: '1.3rem',marginTop:"8px"}} />}><DisplayCard category={contents.category} content={contents.content.Link} extraContent={contents.content.LinkTitle} /></Timeline.Item>
                    );
                  case 'files':
                    return (
                      <Timeline.Item className={contents.active?'Active':''} dot={<PDFIcon style={{ fontSize: '1.3rem' ,marginTop:"5px"}} />}><DisplayCard category={contents.category} content={contents.content.PDFFile} extraContent={contents.content.PDFTitle} /></Timeline.Item>
                    );
                  case 'quiz':
                    return (
                        <Timeline.Item className={contents.active?'Active':''} dot={<QuizIcon style={{ fontSize: '1.3rem',marginTop:"5px" }} />}><DisplayCard category={contents.category} content={contents.content.QuizQuestion} /></Timeline.Item>
                    );
                  case 'poll':
                    return (
                      <Timeline.Item className={contents.active?'Active':''} dot={<PollIcon style={{ fontSize: '1.3rem' ,marginTop:"5px"}} />}><DisplayCard category={contents.category} content={contents.content.PollQuestion} /></Timeline.Item>
                   );
                  case 'text':
                    return (
                        <Timeline.Item className={contents.active?'Active':''} dot={<TextIcon style={{ fontSize: '1.3rem',marginTop:"10px" }} />}><DisplayCard category={contents.category} content={contents.content.Text} /></Timeline.Item>
                    );
    
                }
              }
            )
          }

</Timeline>
            

    );
};