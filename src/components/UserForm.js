// src/components/UserForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Actions/UserActions";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const navigate = useNavigate()
       
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      dispatch(addUser({ id: Date.now(), name, email }));
      setName("");
      setEmail("");
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="btn btn-success">
      <h2 className="text-lg font-bold mb-2">Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="btn btn-warning">
        Add User
      </button>
    </form>
  )
};

export default UserForm;
