import React from "react";
import { GrSubtract } from "react-icons/gr";
import Task from "../Task/Task";
import ActionButton from "../ActionButton/ActionButton";
import { IList } from "../../types";
import { useTypedDispatch } from "../../hooks/redux";

type TListProps = {
  boardId: string;
  lsit: IList;
};

const List = ({ list, boardId }) => {
  const dispatch = useTypedDispatch();
  const handleListDelete = (listId: string) => {};

  return (
    <div>
      <div>
        <div>{list.listName}</div>
        <GrSubtract onClick={() => handleListDelete(list.listId)} />
      </div>
      {list.tasks.map((task, index) => (
        <div key={task.taskId}>
          <Task
            taskName={task.taskName}
            taskDescription={task.taskDescription}
            boardId={boardId}
            id={task.taskId}
            index={index}
          />
        </div>
      ))}
      <ActionButton />
    </div>
  );
};

export default List;
