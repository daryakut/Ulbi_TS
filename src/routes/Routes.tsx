import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import UserPage from "../components/UserPage";
import TodosPage from "../components/TodosPage";
import UserItemPage from "../components/UserItemPage";
import TodoItemPage from "../components/TodoItemPage";

const AppRoutes = () => {
  return (
    <>
      <header>
        <nav style={{ display: "flex", justifyContent: "space-around" }}>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
