import * as types from "../Actions";

export default function (state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.GET_NEWS:
      return { ...state, loading: true };
    case types.GET_NEWS_SUCCESS:
      return { ...state, ...response, loading: false };
    case types.GET_NEWS_ERROR:
      return { ...state, ...response, loading: false };
    default:
      return state;
  }
}
