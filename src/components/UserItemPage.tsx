import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { IUser } from "../types/types"; // Предположим, у вас есть тип IUser

interface Props {}


const UserItemPage: FC<Props> = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams<{ id: string }>(); // Получаем ID пользователя из URL
  const navigate = useNavigate();


  useEffect(() => {
    fetchUser();
  }, [id]);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(response.data);
    } catch (e) {
      alert("Ошибка при загрузке данных пользователя");
    }
  }

  return (
    <>
      <button onClick={() => navigate(-1)}>Назад</button>
      <h1>Информация о пользователе</h1>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Имя: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Город: {user.address.city}</p>
        </div>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </>
  );
};

export default UserItemPage;
