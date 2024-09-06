import { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const TodoItemPage: FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodo();
  }, [id]);

  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo>(
        "https://jsonplaceholder.typicode.com/todos/" + id
      );
      setTodo(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Todos page</h1>
      <div>
        {todo?.id}. {todo?.title} -{" "}
        {todo?.completed ? "Completed" : "Not Completed"}
      </div>
    </>
  );
};

export default TodoItemPage;
