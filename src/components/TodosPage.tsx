import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";

interface TodosPageProps {}

const TodosPage: FC<TodosPageProps> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <List
        items={todos}
        renderItem={(todo: ITodo) => (
          <TodoItem
            todo={todo}
            onClick={() => {
              navigate("/todos/" + todo.id);
            }}
            key={todo.id}
          />
        )}
      />
    </>
  );
};

export default TodosPage;
