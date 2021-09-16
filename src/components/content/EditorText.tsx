import React from 'react';
import {  EditorState} from 'draft-js';
import {ReactComponent as TextIcon} from '../../text.svg';

import './editorText.css';

//import Editor from 'draft-js-plugins-editor';
import Editor from '@draft-js-plugins/editor';
import {
ItalicButton,
BoldButton,
UnderlineButton,
CodeButton,
UnorderedListButton,
OrderedListButton,
BlockquoteButton,
CodeBlockButton,
HeadlineThreeButton,
HeadlineTwoButton,
HeadlineOneButton

} from 'draft-js-buttons';
import {stateFromHTML} from 'draft-js-import-html';

import createToolbarPlugin, {
Separator,
} from '@draft-js-plugins/static-toolbar';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';

import 'draft-js/dist/Draft.css';
import Card from 'react-bootstrap/Card';
import { Button,InputNumber } from 'antd';
import {CloseOutlined,UpCircleOutlined,DownCircleOutlined } from '@ant-design/icons';
import { stateToHTML } from 'draft-js-export-html';



const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;



const plugins = [
toolbarPlugin
];


export interface EditorText{

  removeTab:any;
  content:content;
  updateContentControl:(lessonId: number,cardId:number,field:string,value:any) => void;
  updateContentCardControl:(lessonId: number,cardId:number,field:string,value:any) => void;
  card:contentCard;
  onActive:any;

}


export const EditorText: React.FC<EditorText> = ({onActive,removeTab,content,updateContentControl,updateContentCardControl,card}) =>{

  const [editorState, setEditorState] = React.useState(() =>
  EditorState.createWithContent(stateFromHTML(content?.Text || ""))
  );

  const [buttonState, setButtonState] =React.useState(false);
  const onClick = () => setButtonState(!buttonState);

  const editor = React.useRef(null);


  return (
  <div className="ImageUploadCard" onMouseOver={onActive}>
    <Card className="ImageUpload">
      <div className="EditorArea">
        <Editor ref={editor} editorState={editorState} onChange={setEditorState}
        onBlur={()=>updateContentControl(1,card.id,"Text",stateToHTML(editorState.getCurrentContent()))}
           placeholder="Write something!"
          plugins={plugins} />
      </div>
      <UpCircleOutlined hidden={buttonState} onClick={onClick} className="ToggleButton"/>
      <DownCircleOutlined hidden={!buttonState} onClick={onClick} className="ToggleButton"/>
      { 
      buttonState ? (
      <div className="ButtonToggle" >
      <Toolbar>
        {
        // may be use React.Fragment instead of div to improve perfomance after React 16
        (externalProps:any) => (
        <div className="EditorButtons">
          <BoldButton {...externalProps} />
          <ItalicButton {...externalProps} />
          <UnderlineButton {...externalProps} />
          <CodeButton {...externalProps} />
          <Separator {...externalProps} />
          <UnorderedListButton {...externalProps} />
          <OrderedListButton {...externalProps} />
          <BlockquoteButton {...externalProps} />
          <CodeBlockButton {...externalProps} />
          <HeadlineOneButton {...externalProps} />
          <HeadlineTwoButton {...externalProps} />
          <HeadlineThreeButton {...externalProps} />
        </div>
        )
        }
        
      </Toolbar>
      </div>
      )
      :null
      }
      <Card.Footer className="FooterButtons" style={{borderRadius:"0px 0px 15px 15px"}}>
        <Button disabled size="large">
          <TextIcon /></Button>
        <Button className="CloseButton" size="large" onClick={removeTab}>
          <CloseOutlined /></Button>
        <InputNumber defaultValue={card.points} onChange={(e)=>updateContentCardControl(1,card.id,"points",e)} min={0} max={100} formatter={value=> `${value} Points`} step={5} size="small"
          style={{backgroundColor:"#EF6315", borderRadius:"5px", position: "absolute",right: "65px",bottom: "10px"}}/>
      </Card.Footer>
    </Card>

  </div>
  );
  }