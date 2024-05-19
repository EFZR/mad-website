import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import "@styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container grid">
        <div className="footer__header">
          <hr />
          <div className="footer__logo">
            <span>mad</span>
            <p>church</p>
          </div>
        </div>

        <div className="footer__content grid">
          <ul className="footer__links">
            <a className="footer__link" href="#inicio">Inicio</a>
            <a className="footer__link" href="#acerca">Acerca</a>
            <a className="footer__link" href="#member">Miembros</a>
            <a className="footer__link" href="#events">Eventos</a>
            <a className="footer__link" href="#contact">Contactanos</a>
          </ul>

          <div className="footer__social">
            <a className="footer__social-link" href="#">
              <BiLogoInstagram />
            </a>
            <a className="footer__social-link" href="#">
              <BiLogoFacebook />
            </a>
            <a className="footer__social-link" href="#">
              <BiLogoTwitter />
            </a>
          </div>
        </div>

        <span className="footer__copy">
          &copy; 2021 MAD. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  )
}
