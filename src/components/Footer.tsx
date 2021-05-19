import React from "react";

/**
 * Функция для отображения футера в лэйауте
 *
 *
 */

const Footer: React.FC = () => {
  return (
    <footer className="footer py-3 bg-dark text-light ">
      <div className="container">
        <div className="row">
          <div className="footer-copyright text-center mx-auto">
            <p className="small font-weight-light mb-0">
              © 2021 Copyright:
              <a href="#">Fishouk</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
