import React from 'react';
import { Card,Image } from 'antd';

export interface DisplayCardProps{
    /**
     * What type of a card is this?
     */
    type:'image'|'video'|'text';
    /**
     * What is the conent of this card?
     */
    content:string;
    /**
     * Is this card is currenlty being used or viewed?
     */
    isActive?:boolean;
    /**
   * Optional click handler
   */
    onSelect?:()=>void;
}

/**
 * Primary UI component for user interaction
 */
export const DisplayCard: React.FC<DisplayCardProps> = ({type,content,isActive,onSelect,...props}) => (
      
    <Card style={{ width: 60 +'%', maxHeight:10 +'%'}} {...props}>
        <div>"
           { (type==="image")? (
                <Image
                width={90 +'%'}
                height={90 +'%'}
                src={content}
                alt="Can't able to load Image"
                 />
                 ) : ( (type==="video")? (
                    <Image
                    width={90 +'%'}
                    height={90 +'%'}
                    src={content}
                   alt="Video cannot be displayed" />
                 ) :(
                    <p>{content}</p>
                 ) )
            }
            
        </div>
    </Card>
  );


