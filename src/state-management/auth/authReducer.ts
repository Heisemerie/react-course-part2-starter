interface Login {
  type: "LOGIN";
  username: string;
}

interface Logout {
  type: "LOGOUT";
}

export type AuthAction = Login | Logout;

const authReducer = (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      state = action.username;
      return state;
    case "LOGOUT":
      state = "";
      return state;
    default:
      return state;
  }
};

export default authReducer;
