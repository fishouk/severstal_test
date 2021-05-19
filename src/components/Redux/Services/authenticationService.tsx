import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const signInUserService = (request) => {
  const Login = "Admin";
  const Password = "12345";

  const mock = new MockAdapter(axios);

  const LOGIN_API_ENDPOINT = "http://localhost:3000/login";

  if (
    request.user.userLogin === Login &&
    request.user.userPassword === Password
  ) {
    mock
      .onGet(LOGIN_API_ENDPOINT, { params: { user: request.user } })
      .reply(200, {
        login: [{ success: "true", message: "login success" }],
      });
  } else {
    mock
      .onGet(LOGIN_API_ENDPOINT, { params: { user: request.user } })
      .reply(401, {
        login: [{ success: "false", message: "bad login" }],
      });
  }

  return axios
    .get(LOGIN_API_ENDPOINT, { params: { user: request.user } })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export const signOutUserService = () => {
  const mock = new MockAdapter(axios);

  const LOGOUT_API_ENDPOINT = "http://localhost:3000/logout";

  mock.onGet(LOGOUT_API_ENDPOINT).reply(200, {
    logout: [{ success: "true", message: "logout success" }],
  });

  return axios
    .get(LOGOUT_API_ENDPOINT)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
