interface IArticle {
  id: number;
  title: string;
  body: string;
}

type ArticleState = {
  articles: IArticle[];
};

type ArticleAction = {
  type: string;
  article: IArticle;
};

interface CoverImage {
  ImageSrc: string;
  text: string;
  [key: string]: string;
}

interface quizOption {
  id: number;
  QuizNumber: string;
  OptionText: string;
  OptionType: boolean;
}


interface pollOption {
  id: number;
  PollText: string,
}

interface content {
  ImageCaption?: string;
  ImageFile?: string;

  Text?: string;



  VideoCaption?: string;
  VideoFile?: any;



  PDFFile?: any;
  PDFTitle?: string;
  PDFDescription?: string;
  PDFName?:string;
  PDFSize?:string;

  LinkTitle?: string;
  LinkDescription?: string;
  Link?: string;
  LinkImageFile?: string;

  QuizQuestion?: string;
  options?: any[];
  QuizExplanation?: string;

  PollQuestion?:string;
  CustomAnswer?: boolean;

}

interface contentCard {
  id: number;
  category?: string;
  content: content;
  comment: string;
  points: number;
  active:boolean;
  [key: string]: any;
}

interface Lesson {
  id: number;
  TitleCard?: string;
  CoverImage?: CoverImage;
  contentCards?: contentCard[];
  totalPoint:number;
  [key: string]: any;
}

type LessonState = {
  lessons: Lesson[];
};

type LessonAction = {
  type: string;
  lesson?: Lesson;
  category?: string;
  lessonId?:number;
  cardId?: number;
  field?:string;
  value?:any;
  optionId?: number;
};

type DispatchType = (args: LessonAction) => LessonAction;
