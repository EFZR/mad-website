import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import useScrollY from "@hooks/useScrollY";
import "@styles/Header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const scrollY = useScrollY();

  function handleLink() {
    setShowMenu(false);
  }

  return (
    <header className={`header ${scrollY > 150 ? "bg__header" : ""}`}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          MAD
        </a>
        <div className={`nav__menu ${showMenu ? "show__menu" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#inicio" className="nav__link" onClick={handleLink}>
                Inicio
              </a>
            </li>
            <li className="nav__item">
              <a href="#acerca" className="nav__link" onClick={handleLink}>
                Acerca
              </a>
            </li>
            <li className="nav__item">
              <a href="#member" className="nav__link" onClick={handleLink}>
                Miembros
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link" onClick={handleLink}>
                Eventos
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={handleLink}>
                Contactanos
              </a>
            </li>
          </ul>
          <div className="nav__close">
            <BiX onClick={() => setShowMenu(false)} />
          </div>
          <span className="nav__logo-menu">mad</span>
        </div>
        <div className="nav__actions">
          <div className="nav__toggle">
            <BiMenu onClick={() => setShowMenu(true)} />
          </div>
        </div>
      </nav>
    </header>
  );
}
