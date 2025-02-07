// src/reducers/userReducer.js
const initialState = {
  users: [
    { id: 1, name: "Rohit", email: "rohit@yahoo.com" },
    { id: 2, name: "Sham", email: "sham@gmail.com" },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
