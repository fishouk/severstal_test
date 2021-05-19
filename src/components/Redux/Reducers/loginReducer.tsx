import * as types from "../Actions";

export default function (state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.SIGN_IN_USER_SUCCESS:
      return { ...state, ...response.login };
    case types.SIGN_IN_USER_ERROR:
      return { ...state, ...response.login };
    default:
      return state;
  }
}
