import React from 'react';
import { FinalFileCard } from './Final/FinalFileCard';
import { FinalImageCard } from './Final/FinalImageCard';
import { FinalLinkCard } from './Final/FinalLinkCard';
import { FinalPollCard } from './Final/FinalPollCard';
import { FinalQuizCard } from './Final/FinalQuizCard';
import { FinalTextCard } from './Final/FinalTextCard';
import { FinalVideoCard } from './Final/FinalVideoCard';

// import './contentCard.css';




export interface FinalContentCardProps {

  List: contentCard[] | undefined;

}

export const FinalContentCard: React.FC<FinalContentCardProps> = ({ List}) => {
  
  
  


  return (
    <div className="contents">
      {
        List && List.map(
          (contents: contentCard) => {
            switch (contents.category) {
              case 'image':
                //addContent(contents.category,1);
                return (<FinalImageCard card={contents}/>);
              case 'video':
                return (
                  <FinalVideoCard card={contents} />
                );
              case 'links':
                  return (<FinalLinkCard card={contents}/>
                  );
              case 'files':
                return (
                  <FinalFileCard card={contents} />
                );
              case 'quiz':
                return <FinalQuizCard card={contents} />;
              case 'poll':
                return <FinalPollCard card={contents} />;
              case 'text':
                return (
                  <FinalTextCard card={contents}/>
                );

            }
          }
        )
      }
    </div>
  );

};


