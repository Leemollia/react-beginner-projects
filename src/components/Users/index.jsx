import { useState } from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

export const Users = ({ users = [], isLoaded, setInvited, selectedUsers, setSelectedUsers }) => {
  const [query, setQuery] = useState("");

  const addToInviteList = (id) => {
    setSelectedUsers(() => {
      if (selectedUsers.includes(id)) {
        return selectedUsers.filter((item) => item !== id);
      }
      return [...selectedUsers, id];
    });
  };

  const addToInviteUsers = () => {
    if (!selectedUsers.length) return;
    setInvited(true);
  }

  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          type="text"
          placeholder="Найти пользователя..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {isLoaded ? (
        <ul className="users-list">
          {users
            .filter((user) =>
              user.first_name.concat(user.last_name, user.email).includes(query)
            )
            .map((user) => (
              <User
                key={user.id}
                user={user}
                addToInviteList={addToInviteList}
                selectedUsers={selectedUsers}
              />
            ))}
        </ul>
      ) : (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}
      <button onClick={addToInviteUsers} className="send-invite-btn">
        Отправить приглашение
      </button>
    </>
  );
};
