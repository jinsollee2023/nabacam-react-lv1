import React from "react";
import { BaseTodoComponentProps, Todo } from "../types";

interface Props extends BaseTodoComponentProps {
  cancleBtnHandler: (item: Todo) => void;
}

//done 섹션 그리기
const PaintDoneTodo = ({ item, cancleBtnHandler, deleteBtnHandler }: Props) => {
  return (
    <div className="todo-card" key={item.id}>
      <div className="todo-card-content">
        <div className="text-container">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
        <div className="btn-container">
          <button onClick={() => cancleBtnHandler(item)}>취소</button>
          <button onClick={() => deleteBtnHandler(item.id)}>삭제하기</button>
        </div>
      </div>
    </div>
  );
};

export default PaintDoneTodo;
