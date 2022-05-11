const authReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_CHECK":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "SIGNUP":
      return {
        ...state,
        token: action.payload.encodedToken,
        user: action.payload.createdUser,
      };

    case "LOGIN":
      return {
        ...state,
        token: action.payload.encodedToken,
        user: action.payload.foundUser,
      };

    default:
      return { state };
  }
};

export { authReducer };
