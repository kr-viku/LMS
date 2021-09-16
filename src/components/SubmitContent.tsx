import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { updateContentCard, updateLesson } from "../store/actionCreators";
import { DisplayFileCard } from "./Display/DisplayFileCard";

// import './contentCard.css';
import { DisplayImageCard } from "./Display/DisplayImageCard";
import { DisplayLinkCard } from "./Display/DisplayLinkCard";
import { DisplayPollCard } from "./Display/DisplayPoll";
import { DisplayQuizCard } from "./Display/DisplayQuizCard";
import { DisplayTextCard } from "./Display/DisplayTextCard";
import { DisplayVideoCard } from "./Display/DisplayVideoCard";

export interface ContentCardProps {
  List: contentCard[] | undefined;
}

export const ContentCard: React.FC<ContentCardProps> = ({ List }) => {
  //const [dragList, setDragList] = useState(List);
  let dragListDup = List;

  const dispatch: Dispatch<any> = useDispatch();
  const updateContentCardControl = React.useCallback(
    (lessonId: number, cardId: number, field: string, value: any) =>
      dispatch(updateContentCard(lessonId, cardId, field, value)),
    [dispatch, updateContentCard]
  );

  const updateLessonControl = React.useCallback(
    (lessonId: number, field: string, value: any) =>
      dispatch(updateLesson(lessonId, field, value)),
    [dispatch, updateLesson]
  );

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;
    const items = Array.from(dragListDup || []);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateLessonControl(1,"contentCards",items)
    dragListDup=items;
    //setDragList(items);
  }

  return (
    <div className="contents">
      <DragDropContext onDragEnd={(e) => handleOnDragEnd(e)}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {dragListDup &&
                dragListDup.map((contents: contentCard, i: number) => {
                  switch (contents.category) {
                    case "image":
                      //addContent(contents.category,1);
                      return (
                        <Draggable
                          key={contents.id.toString()}
                          draggableId={contents.id.toString()}
                          index={i}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <DisplayImageCard
                                card={contents}
                                updateContentCardControl={
                                  updateContentCardControl
                                }
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    case "video":
                      return (
                        <Draggable
                          key={contents.id.toString()}
                          draggableId={contents.id.toString()}
                          index={i}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <DisplayVideoCard
                                card={contents}
                                updateContentCardControl={
                                  updateContentCardControl
                                }
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    case "links":
                      return (
                        <Draggable
                          key={contents.id.toString()}
                          draggableId={contents.id.toString()}
                          index={i}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <DisplayLinkCard
                                card={contents}
                                updateContentCardControl={
                                  updateContentCardControl
                                }
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    case "files":
                      return (
                        <Draggable
                          key={contents.id.toString()}
                          draggableId={contents.id.toString()}
                          index={i}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <DisplayFileCard
                                card={contents}
                                updateContentCardControl={
                                  updateContentCardControl
                                }
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    case "quiz":
                      return (
                        <Draggable
                          key={contents.id.toString()}
                          draggableId={contents.id.toString()}
                          index={i}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <DisplayQuizCard
                                card={contents}
                                updateContentCardControl={
                                  updateContentCardControl
                                }
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    case "poll":
                      return (
                        <Draggable
                          key={contents.id.toString()}
                          draggableId={contents.id.toString()}
                          index={i}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <DisplayPollCard
                                card={contents}
                                updateContentCardControl={
                                  updateContentCardControl
                                }
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    case "text":
                      return (
                        <Draggable
                          key={contents.id.toString()}
                          draggableId={contents.id.toString()}
                          index={i}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <DisplayTextCard
                                card={contents}
                                updateContentCardControl={
                                  updateContentCardControl
                                }
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                  }
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
