import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * Функция для отображения ссылки на приватную страницу
 *
 * @param {any} children страница которая будет приватной
 * @param {string} path адрес страницы на которой нужна авторизация
 * @param {string} redirectPage адрес страницы для ридерикта
 *
 */

interface PrivateRouteProps {
  children: any;
  path: string;
  redirectPage: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  redirectPage,
  children,
  ...rest
}) => {
  const auth = localStorage.getItem("signIn");
  return (
    <Route
      {...rest}
      path={path}
      render={({ location }) =>
        auth === "true" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectPage,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
