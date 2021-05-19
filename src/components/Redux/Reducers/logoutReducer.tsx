import * as types from "../Actions";

export default function (state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.SIGN_OUT_USER_SUCCESS:
      return { ...state, ...response.logout };
    case types.SIGN_OUT_USER_ERROR:
      return { ...state, ...response.logout };
    default:
      return state;
  }
}
