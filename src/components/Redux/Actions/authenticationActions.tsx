import * as types from "./index";

export const signInUserAction = (user) => {
  return {
    type: types.SIGN_IN_USER,
    user,
  };
};

export const signOutUserAction = () => {
  return {
    type: types.SIGN_OUT_USER,
  };
};
