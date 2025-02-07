// src/actions/userActions.js
export const addUser = (user) => {
    return {
      type: "ADD_USER",
      payload: user,
    }
  };
  