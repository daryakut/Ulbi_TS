import React, { FC } from "react";
import { IUser } from "../types/types";

interface Props {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<Props> = ({ user, onClick }) => {
  return (
    <div
    
      onClick={() => onClick(user)}
      style={{ padding: "15px", border: "1px solid black", cursor:"pointer"}}
    >
      {" "}
      {user.id} {user.name}
      {" lives in "} {user.address.city}
    </div>
  );
};

export default UserItem;
