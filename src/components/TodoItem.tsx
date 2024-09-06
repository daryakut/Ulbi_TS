import React, { FC } from "react";
import { ITodo, IUser } from "../types/types";

interface Props {
  todo: ITodo;
  onClick: (todo: ITodo) => void;
}

const UserItem: FC<Props> = ({ todo, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick(todo);
      }}
      style={{ cursor: "pointer", padding: "15px", border: "1px solid black" }}
    >
      <input type="checkbox" checked={todo.completed} />
      {todo.id} {todo.title}
    </div>
  );
};

export default UserItem;
