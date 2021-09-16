import React from 'react';
import './collaborationCard.css';
import { List,  Input} from 'antd';
import { CollaborationItem } from './CollaborationItem';


const{Search}=Input;
export interface CollaborationCardProps{

}

export const CollaborationCard: React.FC<CollaborationCardProps> = () => (

  <div>
  <div style={{fontSize:"12px", float:"left", margin:"5px"}}>Add and manage colaborators for this content.</div>
  <div className="SiderStart">
    <div className="Search"> 
    <Search className="SearchBox" size="large" placeholder="input search text" style={{borderRadius:"15px"}}/>
    </div>
    
    <div className="collabItems">
      <List style={{ backgroundColor: "transparent", borderRadius: "15px" , margin:"5px"}}>
<CollaborationItem/>
<CollaborationItem/>
<CollaborationItem/>
<CollaborationItem/>
<CollaborationItem/>
<CollaborationItem/>
<CollaborationItem/>


      </List>
    </div>
  </div>
  </div>
  );