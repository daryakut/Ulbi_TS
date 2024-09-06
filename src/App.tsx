import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import "./App.css";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes />
        {/* <EventsExample/>
      <Card
        onClick={(num) => console.log("hello", num)}
        width="100px"
        height="100px"
        variant={CardVariant.primary}
      >
        <button>Add</button>
      </Card> */}
        {/* <UserList users={users} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
