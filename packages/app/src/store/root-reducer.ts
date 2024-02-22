import usersReducer from "./users/slice";
import { UsersStateType } from "./users/types";

export type StateType = {
  users: UsersStateType;
};

const rootReducers = {
  users: usersReducer,
};

export default rootReducers;
