import React from 'react';
import './collaborationItem.css';
import { Avatar, List, Skeleton} from 'antd';
import { PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';



export interface CollaborationItemProps{

}

export const CollaborationItem: React.FC<CollaborationItemProps> = () => {
   
    return(
    <List.Item style={{  borderRadius: "15px" , margin:"5px",height:"50px"}} actions={[<MinusCircleOutlined 
        style={{ fontSize: '25px', color:"skyblue" }} />]}
    >
    <Skeleton avatar title={false} loading={false} active>
        <List.Item.Meta avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={<div >First Name</div>}
        description="UI developer"
        />
    </Skeleton>
    </List.Item>
    );
};