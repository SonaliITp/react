// src/components/UserList.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = useSelector((state) => state.users);

  localStorage.setItem("data",JSON.stringify(users[0]))
  return (
    <div className="p-4 border border-primary-400 mt-4">
      <h2 className="text-lg font-bold mb-2">User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b">
            {user.name} - {user.email} --
            <Link to={`/edit-user/${user.id}`} className="text-blue-500">Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
