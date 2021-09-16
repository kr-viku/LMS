import React from 'react';
import { Card,Image } from 'antd';
import './displayCard.css';

export interface DisplayCardProps{
    /**
     * What type of a card is this?
     */
    category:'image'|'video'|'text';
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
export const DisplayCard: React.FC<DisplayCardProps> = ({category,content,isActive,onSelect,...props}) => (
    <div className="Card">
    <Card {...props}>
       
           { (category==="image")? (
                <Image
               
                height={100}
                src={content}
                alt="Can't able to load Image"
                 />
                 ) : ( (category==="video")? (
                    <Image
                    height={100}
                    src={content}
                    fallback="https://www.iconsdb.com/icons/preview/gray/start-xxl.png"
                    />
                 ) :(
                    <p className="CardContent">{content}</p>
                 ) )
            }
    </Card>
    </div>
  );


