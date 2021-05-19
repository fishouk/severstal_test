import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Функция для отображения линка меню
 *
 * @param {string} title текст линка
 * @param {string} url путь линка
 *
 */

interface MenuLinkProps {
  url: string;
  title: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ url, title }) => {
  return (
    <li className="nav-item">
      <NavLink
        exact={url === "/" ?? true}
        className="nav-link"
        activeClassName="active"
        to={url ?? "#"}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default MenuLink;
