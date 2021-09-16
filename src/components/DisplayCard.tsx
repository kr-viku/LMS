import React from 'react';
import { Card,Image } from 'antd';
import './displayCard.css';

export interface DisplayCardProps{
    /**
     * What type of a card is this?
     */
    category:string | any;
    /**
     * What is the conent of this card?
     */
    content:string | any;
    /**
     * Is this card is currenlty being used or viewed?
     */
    isActive?:boolean;
    /**
   * Optional click handler
   */
    onSelect?:()=>void;

    extraContent?:string;
}

/**
 * Primary UI component for user interaction
 */
export const DisplayCard: React.FC<DisplayCardProps> = ({category,content,isActive,onSelect,extraContent,...props}) => (
    <div className="Card">
    <Card {...props}>
       
       { (category==="image")? (
            <Image height={"100%"}src={content} alt="Can't able to load Image"/>
             ) : ( (category==="video")? (
                <video width="100%" height="100%" controls style={{height:"-webkit-fill-available",maxWidth:"-webkit-fill-available"}}>
                  <source src={ content } type="video/mp4" />
                  <source src={ content } type="video/webm" />
                  </video>
             ) :( (category==="text")? (
                <p className="CardContent" dangerouslySetInnerHTML={{__html:content}}></p>
             ) :( (category==="links")? (
               <a href={content} target="_blank" rel="noreferrer">{extraContent}</a>
             ) :( (category==="files")? (
               <a href={content} target="_blank" rel="noreferrer">{extraContent}</a>
             ) :( (category==="quiz")? (
               <p className="CardContent">{content}</p>
             ) : ( (category==="poll")? (
              <p className="CardContent">{content}</p>
            ):
               (<p className="CardContent">{content}</p>)
             )
             )           
             )
             )
             ))
        }
</Card>
       
    </div>
  );


