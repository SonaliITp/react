// src/components/EditUser.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((u) => u.id === parseInt(id));

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_USER",
      payload: { id: parseInt(id), name, email },
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleUpdate} className="p-4 border border-gray-300">
      <h2 className="text-lg font-bold mb-2">Edit User</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="btn btn-dark">
        Update User
      </button>
    </form>
  );
};

export default EditUser;
