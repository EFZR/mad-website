import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import useScrollY from "@hooks/useScrollY";
import "@styles/Header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const scrollY = useScrollY();

  console.log(scrollY);
  

  return (
    <header className={`header ${scrollY > 75 ? "bg__header" : ""}`}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          MAD
        </a>
        <div className={`nav__menu ${showMenu ? "show__menu" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Inicio
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Acerca
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Lideres
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Eventos
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
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
