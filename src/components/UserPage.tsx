import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ITodo, IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";

interface UserPageProps {}

const UserPage: FC<UserPageProps> = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            user={user}
            onClick={(user) => {
              navigate("/users/" + user.id);
            }}
            key={user.id}
          />
        )}
      />
    </>
  );
};

export default UserPage;
