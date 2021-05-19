import React from "react";

import TopMenu from "./TopMenu";
import Footer from "./Footer";

/**
 * Функция для отображения дефолтного лэйаута
 *
 * @param {string} title текст для мета тега title
 * @param {any} children страница которая обернута в этот Layout
 *
 */

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <TopMenu />
      <main className="flex-fill mt-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
