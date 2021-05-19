import React from "react";
import MenuLink from "@components/MenuLink";

import menuLinks from "@data/menuLinks.json";

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

/**
 * Функция для отображения верхнего меню в лэйауте
 *
 *
 */

const TopMenu: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {menuLinks &&
                !!menuLinks.length &&
                menuLinks.map(({ id, title, url }) => (
                  <React.Fragment key={id}>
                    <MenuLink title={title} url={url} />
                  </React.Fragment>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopMenu;
