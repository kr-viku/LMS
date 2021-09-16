import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'antd';
import './displayPoll.css';
import { useState } from 'react';
import { CommentArea } from './CommentArea';
import { DisplayPollOptionsCard } from './DisplayPollOptions';
import {ReactComponent as PollIcon} from '../../Poll.svg';


export interface DisplayPollCardProps{

    card:contentCard;
    updateContentCardControl: (lessonId: number,cardId:number,field:string,value:any) => void


}

export const DisplayPollCard: React.FC<DisplayPollCardProps> = ({card,updateContentCardControl}) =>{

    const[comment,setComment]=useState(false);

    function openComment(){
        setComment(comment=>!comment);
    }
    return(
    <div className="DisplayPollCard">
        {
        comment &&
        <CommentArea card={card} updateContentCardControl={updateContentCardControl}/>
        }
        <Card className="ImageUpload Display">
            <Card.Header className="FooterButtons">
                <Button disabled size="large"
                    style={{backgroundColor:"white", borderRadius:"15px 0px 0px 0px",marginRight:"5px"}}>
                    <PollIcon /></Button>Poll
                <Button className="DisplayPoints" size="small"
                    style={{backgroundColor:"#EF6315", borderRadius:"5px"}}>{card.points} Points</Button>
                <Button className="DisplayComments" size="large" onClick={openComment}>
                    <img alt="" className="DisplayCommentIcon"
                        src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIC00NSA1MTIgNTExIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQwNyAuNWgtMzAyYy01Ny44OTg0MzggMC0xMDUgNDcuMTAxNTYyLTEwNSAxMDV2MTYyLjE3MTg3NWMwIDQ2LjE5OTIxOSAzMC4zMzIwMzEgODYuNDM3NSA3NC4yODUxNTYgOTkuMzE2NDA2bDUwLjcxMDkzOCA1MC43MTQ4NDRjMi44MTY0MDYgMi44MTI1IDYuNjI4OTA2IDQuMzk0NTMxIDEwLjYwOTM3NSA0LjM5NDUzMSAzLjk3NjU2MiAwIDcuNzkyOTY5LTEuNTgyMDMxIDEwLjYwNTQ2OS00LjM5NDUzMWw0Ni41MTk1MzEtNDYuNTIzNDM3aDIxNC4yNjk1MzFjNTcuODk4NDM4IDAgMTA1LTQ3LjEwMTU2MyAxMDUtMTA1di0xNjAuNjc5Njg4YzAtNTcuODk4NDM4LTQ3LjEwMTU2Mi0xMDUtMTA1LTEwNXptNzUgMjY1LjY3OTY4OGMwIDQxLjM1NTQ2OC0zMy42NDQ1MzEgNzUtNzUgNzVoLTIyMC40ODA0NjljLTMuOTc2NTYyIDAtNy43OTI5NjkgMS41ODIwMzEtMTAuNjA1NDY5IDQuMzk0NTMxbC00MC4zMDg1OTMgNDAuMzA4NTkzLTQyLjkyOTY4OC00Mi45Mjk2ODdjLTEuOTI1NzgxLTEuOTI1NzgxLTQuMzM5ODQzLTMuMjkyOTY5LTYuOTg0Mzc1LTMuOTQ5MjE5LTMyLjc4OTA2Mi04LjE2MDE1Ni01NS42OTE0MDYtMzcuNDkyMTg3LTU1LjY5MTQwNi03MS4zMzIwMzF2LTE2Mi4xNzE4NzVjMC00MS4zNTU0NjkgMzMuNjQ0NTMxLTc1IDc1LTc1aDMwMmM0MS4zNTU0NjkgMCA3NSAzMy42NDQ1MzEgNzUgNzV6bTAgMCIvPjxwYXRoIGQ9Im0zNTEuMjQyMTg4IDE0NC4zMjgxMjVoLTE5MC40ODQzNzZjLTguMjg1MTU2IDAtMTUgNi43MTg3NS0xNSAxNSAwIDguMjg1MTU2IDYuNzE0ODQ0IDE1IDE1IDE1aDE5MC40ODQzNzZjOC4yODUxNTYgMCAxNS02LjcxNDg0NCAxNS0xNSAwLTguMjgxMjUtNi43MTQ4NDQtMTUtMTUtMTV6bTAgMCIvPjxwYXRoIGQ9Im0zNTEuMjQyMTg4IDE5Ny4zNTE1NjJoLTE5MC40ODQzNzZjLTguMjg1MTU2IDAtMTUgNi43MTQ4NDQtMTUgMTUgMCA4LjI4NTE1NyA2LjcxNDg0NCAxNSAxNSAxNWgxOTAuNDg0Mzc2YzguMjg1MTU2IDAgMTUtNi43MTQ4NDMgMTUtMTUgMC04LjI4NTE1Ni02LjcxNDg0NC0xNS0xNS0xNXptMCAwIi8+PC9zdmc+" />
                { card.comment &&
                    <div className="isComment">*</div>
                    }
                </Button>
            </Card.Header>
            <div className="DisplayPollQuestion">
                {card.content.PollQuestion}
            </div>
            <div className="PollOptions">
            {card.content.options?.map((option)=>(<DisplayPollOptionsCard option={option} />))}
            </div>
        </Card>
    </div>
    );
    };