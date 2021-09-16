import * as actionTypes from "./actionTypes";
import produce, { setAutoFreeze } from "immer";
setAutoFreeze(false);

const initialState: LessonState = {
  lessons: [
    {
      id: 1,
      TitleCard: "This is sample title",
      totalPoint:90,
      CoverImage: {
        ImageSrc: "https://www.w3schools.com/w3css/img_lights.jpg",
        text: "Upload a cover Image",
      },
      contentCards: [
        {
          id: 1,
          category: "image",
          content: {
            ImageCaption: "Image Caption",
            ImageFile:
              "https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg",
          },
          comment: "comment Text",
          points: 10,
          active:true,
        },
        {
          id: 2,
          category: "text",
          content: {
            Text:
              "Text",
          },
          comment: "comment Text",
          points: 10,
          active:false,
        },
        {
          id: 3,
          category: "video",
          content: {
            VideoCaption: "",
            VideoFile: "https://www.youtube.com/watch?v=Qah9sSIXJqk",
          },
          comment: "comment Text",
          points: 10,
          active:false,
        },
        {
          id: 4,
          category: "video",
          content: {
            VideoCaption: "",
            VideoFile: "https://www.youtube.com/watch?v=Qah9sSIXJqk",
          },
          comment: "comment Text",
          points: 10,
          active:false,
        },
        {
          id: 5,
          category: "files",
          content: {
            PDFFile: "https://url.com",
            PDFTitle: "Title for PDF",
            PDFDescription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium sodales lacus ut euismod. Ut laoreet dictum magna commodo tempor. Fusce rhoncus risus sed dapibus pharetra. Vestibulum rutrum, neque in lobortis sollicitudin, magna magna bibendum lectus, ac aliquet ante enim in mauris. Curabitur odio lorem, rhoncus at mollis nec, efficitur a risus. Sed porta elementum est, et imperdiet urna elementum et. Praesent mattis faucibus erat ac bibendum. Suspendisse quis sapien id augue pellentesque egestas. Suspendisse varius consectetur nunc, sed eleifend odio. Aliquam tempor ante mauris, et rhoncus erat accumsan eu. Nunc id placerat elit.",
          },
          comment: "comment Text",
          points: 10,
          active:false,
        },
        {
          id: 6,
          category: "image",
          content: {
            ImageCaption: "",
            ImageFile:
              "https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg",
          },
          comment: "comment Text",
          points: 10,
          active:false,
        },
        {
          id: 7,
          category: "links",
          content: {
            LinkTitle: "Title for Link",
            LinkDescription: "Description for Link",
            Link: "https://www.youtube.com/watch?v=Qah9sSIXJqk",
            LinkImageFile:
              "https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg",
          },
          comment: "comment Text",
          points: 10,
          active:false,
        },
        {
          id: 8,
          category: "quiz",
          content: {
            QuizQuestion: "Quiz Question",
            options: [
              {
                id: 1,
                QuizNumber: "a",
                OptionText: "option 1",
                OptionType: true,
              },
            ],
            QuizExplanation: "https://www.youtube.com/watch?v=Qah9sSIXJqk",
          },
          comment: "comment Text",
          points: 10,
          active:false,
        },
        {
          id: 9,
          category: "poll",
          content: {
            PollQuestion: "Poll Question",
            CustomAnswer:true,
            options: [
              {
                id: 1,
                PollText: "option 1",
              },
            ],
          },
          comment: "comment Text",
          points: 10,
          active:false,
        },
      ],
    },
  ],
};

function nextChar(str: string): string {
  if (str.length === 0) {
    return "a";
  }
  var charA = str.split("");
  if (charA[charA.length - 1] === "z") {
    return nextChar(str.substring(0, charA.length - 1)) + "a";
  } else {
    return (
      str.substring(0, charA.length - 1) +
      String.fromCharCode(charA[charA.length - 1].charCodeAt(0) + 1)
    );
  }
}

const reducer = (
  state: LessonState = initialState,
  action: LessonAction
): LessonState => {
  switch (action.type) {
    case actionTypes.ADD_LESSON:
      const newLesson: Lesson = {
        id: Math.random(), // not really unique
        TitleCard: "test",
        totalPoint:0,
      };
      return {
        ...state,
        lessons: state.lessons.concat(newLesson),
      };
    case actionTypes.REMOVE_LESSON:
      const updatedLessons: Lesson[] = state.lessons.filter(
        (lesson) => lesson.id !== (action.lesson && action.lesson.id)
      );
      return {
        ...state,
        lessons: updatedLessons,
      };
    case actionTypes.ADD_CONTENTCARD:
      let lesson: Lesson | undefined = state.lessons.find(
        (lesson) => lesson.id === (action.lessonId && action.lessonId)
      );
      let lessonIndex: number = -1;
      if (action.lessonId && lesson)
        lessonIndex = state.lessons
          .map(function (x) {
            return x.id;
          })
          .indexOf(action.lessonId);

      const newContentCard: contentCard = {
        id: Math.random(), // not really unique
        category: action.category,
        content: {
          options:[]
        },
        comment: "",
        points: 5,
        active:false,
      };
      let newLessons = produce(state, (draft) => {
        draft.lessons[lessonIndex].contentCards?.push(newContentCard);

        let updateLesson = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
        
        let total=updateLesson?.contentCards?.reduce((a, b) => a + (b["points"] || 0), 0);
        if(updateLesson && total && total>0)
        updateLesson.totalPoint=total;
      });

      return {
        ...state,
        lessons: newLessons.lessons,
      };
    case actionTypes.UPDATE_CONTENT:
      let updatelesson = state.lessons.find(
        (e) => e.id === (action.lessonId && action.lessonId)
      );
      let updateLessonIndex = -1;
      let updateContentIndex: number | undefined = -1;
      if (action.lessonId && updatelesson && action.cardId && action.field) {
        updateLessonIndex = state.lessons
          .map(function (x) {
            return x.id;
          })
          .indexOf(action.lessonId);

        updateContentIndex = state.lessons[updateLessonIndex].contentCards
          ?.map(function (x) {
            return x.id;
          })
          .indexOf(action.cardId);

        let contentCardData:
          | contentCard
          | undefined = updatelesson?.contentCards?.find(
          (x) => x.id === (action.cardId && action.cardId)
        );
        if (contentCardData && action.field) {
          contentCardData.content = Object.assign({}, contentCardData.content, {
            [action.field]: action.value,
          });
          //updatelesson.contentCards[updateContentIndex]
          //state.lessons[updateLessonIndex]=Object.assign({},state.lessons[updateLessonIndex],updatelesson)
        }
      }
      let updateNewLessons = produce(state, (draft) => {
        if (updatelesson)
          draft.lessons[updateLessonIndex] = Object.assign(
            {},
            draft.lessons[updateLessonIndex],
            updatelesson
          );

          
      });
      return {
        ...state,
        lessons: updateNewLessons.lessons,
      };
    case actionTypes.REMOVE_CONTENT_CARD:
      let deleteLessonIndex = -1;
      if (action.lessonId && action.cardId) {
        deleteLessonIndex = state.lessons
          .map(function (x) {
            return x.id;
          })
          .indexOf(action.lessonId);
      }

      return {
        ...state,
        lessons: produce(state.lessons, (draft) => {
          draft[deleteLessonIndex].contentCards = draft[
            deleteLessonIndex
          ].contentCards?.filter(
            (x) => x.id !== (action.cardId && action.cardId)
          );

          let updateLesson = draft
          .find((lesson) => lesson.id === action.lessonId)
        
        let total=updateLesson?.contentCards?.reduce((a, b) => a + (b["points"] || 0), 0);
        if(updateLesson && total && total>0)
        updateLesson.totalPoint=total;
        }),
      };

    case actionTypes.ADD_QUIZ_OPTION:
      let addQuizOptionnewLessons = produce(state, (draft) => {
        let options = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
          ?.contentCards?.find((card) => card.id === action.cardId)?.content
          .options;

        options?.push({
          id: Math.random(),
          QuizNumber: options.length>0?nextChar(options[options.length - 1].QuizNumber):"a",
          OptionText: "",
          OptionType: false,
        });
      });

      return {
        ...state,
        lessons: addQuizOptionnewLessons.lessons,
      };

    case actionTypes.REMOVE_QUIZ_OPTION:
      let removeQuizOptionnewLessons = produce(state, (draft) => {
        let options = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
          ?.contentCards?.find((card) => card.id === action.cardId)?.content
          .options;

        options?.splice(
          options.findIndex((e) => e.id === action.optionId),
          1
        );
      });

      return {
        ...state,
        lessons: removeQuizOptionnewLessons.lessons,
      };

      case actionTypes.ADD_POLL_OPTION:
      let addPollOptionnewLessons = produce(state, (draft) => {
        let options = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
          ?.contentCards?.find((card) => card.id === action.cardId)?.content
          .options;

        options?.push({
          id: Math.random(),
          PollText: "",
        });
      });

      return {
        ...state,
        lessons: addPollOptionnewLessons.lessons,
      };

    case actionTypes.REMOVE_POLL_OPTION:
      let removePollOptionnewLessons = produce(state, (draft) => {
        let options = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
          ?.contentCards?.find((card) => card.id === action.cardId)?.content
          .options;

        options?.splice(
          options.findIndex((e) => e.id === action.optionId),
          1
        );
      });

      return {
        ...state,
        lessons: removePollOptionnewLessons.lessons,
      };

      case actionTypes.UPDATE_OPTION:
      let updateOptionnewLessons = produce(state, (draft) => {
        let options = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
          ?.contentCards?.find((card) => card.id === action.cardId)?.content
          .options;
        if(options && action.field)
        options.find((e) => e.id === action.optionId)[action.field]=action.value
      });

      return {
        ...state,
        lessons: updateOptionnewLessons.lessons,
      };

      case actionTypes.UPDATE_CONTENT_CARD:
      let updateContentCardLessons = produce(state, (draft) => {
        let updateContentCard = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
          ?.contentCards?.find((card) => card.id === action.cardId)
        if(updateContentCard && action.field)
        updateContentCard[action.field]=action.value

        let updateLesson = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
        
        let total=updateLesson?.contentCards?.reduce((a, b) => a + (b["points"] || 0), 0);
        if(updateLesson && total && total>0)
        updateLesson.totalPoint=total;

      });

      return {
        ...state,
        lessons: updateContentCardLessons.lessons,
      };

      case actionTypes.UPDATE_COVER_IMAGE:
      let updateCoverImageLessons = produce(state, (draft) => {
        let updateCoverImageCard = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)?.CoverImage
        if(updateCoverImageCard && action.field)
        updateCoverImageCard[action.field]=action.value
      });

      return {
        ...state,
        lessons: updateCoverImageLessons.lessons,
      };

      case actionTypes.UPDATE_LESSON:
      let updateLessons = produce(state, (draft) => {
        let updateLesson = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
        if(updateLesson && action.field)
        updateLesson[action.field]=action.value
      });

      return {
        ...state,
        lessons: updateLessons.lessons,
      };

      case actionTypes.UPDATE_TOTAL:
      let updateTotalLessons = produce(state, (draft) => {
        let updateLesson = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
        
        let total=updateLesson?.contentCards?.reduce((a, b) => a + (b["points"] || 0), 0);
        if(updateLesson && total && total>0)
        updateLesson.totalPoint=total;

      });

      return {
        ...state,
        lessons: updateTotalLessons.lessons,
      };

      case actionTypes.SET_ACTIVE:
      let setActiveLessons = produce(state, (draft) => {
        let updateContentCard = draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
          ?.contentCards?.find((card) => {
            return card.id === action.cardId
          })

          draft.lessons
          .find((lesson) => lesson.id === action.lessonId)
          ?.contentCards?.map((card) => {
            card.active=false
          })

          if(updateContentCard)updateContentCard.active=true;

      });

      return {
        ...state,
        lessons: setActiveLessons.lessons,
      };
  }
  return state;
};

export default reducer;
