import * as actionTypes from "./actionTypes"

export function addLesson(lesson: Lesson) {
  const action: LessonAction = {
    type: actionTypes.ADD_LESSON,
    lesson,
  }

  return simulateHttpRequest(action)
}

export function removeLesson(lesson: Lesson) {
  const action: LessonAction = {
    type: actionTypes.REMOVE_LESSON,
    lesson,
  }
  return simulateHttpRequest(action)
}

export function addContentCard(category: string,lessonId:number) {
  const action: LessonAction = {
    type: actionTypes.ADD_CONTENTCARD,
    category,
    lessonId,
  }
  return simulateHttpRequest(action)
}

export function updateContent(lessonId:number,cardId:number,field:string,value:any) {
  const action: LessonAction = {
    type: actionTypes.UPDATE_CONTENT,
    lessonId,
    cardId,
    field,
    value
  }
  return simulateHttpRequest(action)
}

export function deleteContentCard(lessonId:number,cardId:number) {
  const action: LessonAction = {
    type: actionTypes.REMOVE_CONTENT_CARD,
    lessonId,
    cardId
  }
  return simulateHttpRequest(action)
}

export function addQuizOption(lessonId:number,cardId:number) {
  const action: LessonAction = {
    type: actionTypes.ADD_QUIZ_OPTION,
    lessonId,
    cardId
  }
  return simulateHttpRequest(action)
}

export function removeQuizOption(lessonId:number,cardId:number,optionId:number) {
  const action: LessonAction = {
    type: actionTypes.REMOVE_QUIZ_OPTION,
    lessonId,
    cardId,
    optionId
  }
  return simulateHttpRequest(action)
}

export function addPollOption(lessonId:number,cardId:number) {
  const action: LessonAction = {
    type: actionTypes.ADD_POLL_OPTION,
    lessonId,
    cardId
  }
  return simulateHttpRequest(action)
}

export function removePollOption(lessonId:number,cardId:number,optionId:number) {
  const action: LessonAction = {
    type: actionTypes.REMOVE_POLL_OPTION,
    lessonId,
    cardId,
    optionId
  }
  return simulateHttpRequest(action)
}

export function updateOption(lessonId:number,cardId:number,optionId:number,field:string,value:any) {
  const action: LessonAction = {
    type: actionTypes.UPDATE_OPTION,
    lessonId,
    cardId,
    optionId,
    field,
    value
  }
  return simulateHttpRequest(action)
}

export function updateTotal(lessonId:number) {
  const action: LessonAction = {
    type: actionTypes.UPDATE_TOTAL,
    lessonId
  }
  return simulateHttpRequest(action)
}

export function updateContentCard(lessonId:number,cardId:number,field:string,value:any) {
  const action: LessonAction = {
    type: actionTypes.UPDATE_CONTENT_CARD,
    lessonId,
    cardId,
    field,
    value
  }
  return simulateHttpRequest(action)
}

export function updateCoverImage(lessonId:number,field:string,value:any) {
  const action: LessonAction = {
    type: actionTypes.UPDATE_COVER_IMAGE,
    lessonId,
    field,
    value
  }
  return simulateHttpRequest(action)
}

export function setActive(lessonId:number,cardId:number) {
  const action: LessonAction = {
    type: actionTypes.SET_ACTIVE,
    lessonId,
    cardId
  }
  return simulateHttpRequest(action)
}

export function updateLesson(lessonId:number,field:string,value:any) {
  const action: LessonAction = {
    type: actionTypes.UPDATE_LESSON,
    lessonId,
    field,
    value
  }
  return simulateHttpRequest(action)
}


export function simulateHttpRequest(action: LessonAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 100)
  }
}