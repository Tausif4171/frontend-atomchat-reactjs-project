import { combineReducers } from "redux";
import { groupReducer } from "./groupReducer";
import initialState from "./initialState";
import { userReducer } from "./userReducer";

const rootReducers = combineReducers({
  users: userReducer,
  groups: groupReducer,
});

const reducers = function combinedRootReducer(state, action) {
  return action.type === "LOGOUT_SUCCESS"
    ? rootReducers(initialState, action)
    : rootReducers(state, action);
};

export default reducers;
