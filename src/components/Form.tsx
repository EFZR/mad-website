import "@styles/Form.css"

export default function Form() {
  return (
    <section className="section container" id="contact">
      <div className="container__form grid">
        <h1 className="form__title">
          Completa el formulario <br />
          y te <span>contactaremos</span>
        </h1>
        <form className="form grid" autoComplete="off">
          <div className="name__group grid">
            <div className="field">
              <input type="text" id="name" name="name" placeholder="Nombre" />
              <label className="label" htmlFor="name">Nombre</label>
            </div>

            <div className="field">
              <input type="text" id="last-name" placeholder="Apellido" name="last-name" />
              <label className="label" htmlFor="last-name">Apellido</label>
            </div>
          </div>

          <div className="field">
            <input type="email" id="email" name="email" placeholder="Correo" />
            <label className="label" htmlFor="email">Correo</label>
          </div>

          <div className="field">
            <textarea id="message" name="message" placeholder="Mensaje"></textarea>
            <label className="label" htmlFor="message">Mensaje</label>
          </div>

          <input type="submit" value="Enviar" className="button" />
        </form>
      </div>
    </section>
  )
}
