import React, { useState, FC, useRef } from "react";
import { useTypedSelector } from "../../hooks/redux";
import clsx from "clsx";
import SideForm from "./SideForm/SideForm";
import { FiPlusCircle } from "react-icons/fi";
import {
  addSection,
  boardItem,
  boardItemActive,
  container,
  title,
} from "./BoardList.css";

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList: FC<TBoardListProps> = ({ activeBoardId, setActiveBoardId }) => {
  const { boardArray } = useTypedSelector((state) => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
    // setTimeout(() => {
    //   inputRef.current?.focus();
    // }, 0);
    inputRef.current?.focus();
  };

  return (
    <div className={container}>
      <div className={title}>게시판 : </div>
      {boardArray.map((board, index) => (
        <div
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
          className={clsx(
            {
              [boardItemActive]:
                boardArray.findIndex((b) => b.boardId === activeBoardId) === index,
            },
            {
              [boardItem]:
                boardArray.findIndex((b) => b.boardId === activeBoardId) !== index,
            }
          )}
          key={board.boardId}
        >
          <div>{board.boardName}</div>
        </div>
      ))}
      <div className={addSection}>
        {isFormOpen ? (
          <SideForm inputRef={inputRef} setIsFormOpen={setIsFormOpen} />
        ) : (
          <FiPlusCircle onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default BoardList;
