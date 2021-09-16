import React from 'react';
//import './appDarkMode.css'; //DarkModeCss
import './App.css';     //Normal Mode
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {  useDispatch } from "react-redux"

import { addLesson } from "./store/actionCreators"
import { Dispatch } from "redux"

import { WebLayout} from './components/WebLayout';
import { Submit } from './components/submit';
import { Final } from './components/Final';


function App() {
  
  const dispatch: Dispatch<any> = useDispatch()

  const addLessonControl = React.useCallback(
    (lesson:Lesson) => dispatch(addLesson(lesson)),
    [dispatch]
  )

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <WebLayout addLessonControl={addLessonControl}></WebLayout>
          </Route>
          <Route exact path="/submit">
            <Submit addLessonControl={addLessonControl}></Submit>
          </Route>
          <Route exact path="/final">
            <Final></Final>
          </Route>
   </Switch>
   </BrowserRouter>
  </div>
  );
}

export default App;
