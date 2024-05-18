import { BiBulb, BiSolidBinoculars, BiTrophy } from "react-icons/bi"
import "@styles/About.css"

export default function About() {
  return (
    <section className="section container about" id="acerca">
      <h1 className="section__title">Acerca</h1>

      <div className="acerca__container">
        <p className="acerca__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum eleifend ultrices. Aenean a rutrum magna.
        </p>

        <div className="acerca__data grid">
          <div className="acerca__item grid">
            <BiSolidBinoculars className="acerca__icon" />
            <h2 className="acerca__title">Vision</h2>
            <p className="acerca__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum eleifend ultrices. Aenean a rutrum magna.
            </p>
            <button className="button">
              Leer mas
            </button>
          </div>

          <div className="acerca__item grid">
            <BiBulb className="acerca__icon" />
            <h2 className="acerca__title">Mision</h2>
            <p className="acerca__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum eleifend ultrices. Aenean a rutrum magna.
            </p>
            <button className="button">
              Leer mas
            </button>
          </div>

          <div className="acerca__item grid">
            <BiTrophy className="acerca__icon" />
            <h2 className="acerca__title">Meta</h2>
            <p className="acerca__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum eleifend ultrices. Aenean a rutrum magna.
            </p>
            <button className="button">
              Leer mas
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
