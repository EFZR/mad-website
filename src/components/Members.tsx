import "@styles/Members.css";

export default function Members() {
  return (
    <section className="section container" id="member">
      <div className="member__container grid">
        <div className="member__description-container">
          <p className="member__description">
            <span>Personas</span><br />
            Las grandes personas detrás de nuestra empresa.
          </p>
        </div>

        <div className="member__article-container grid">
          <h2 className="member__title">Lideres</h2>
          <article className="member__leaders grid">
            <div className="member__item-leader grid">
              <img src="member-1.jpeg" alt="member-1.jpeg" />
              <h2 className="member__name">Juan Perez</h2>
              <span className="member__position">CEO</span>
            </div>

            <div className="member__item-leader grid">
              <img src="member-2.jpeg" alt="member-2.jpeg" />
              <h2 className="member__name">Mario Lopez</h2>
              <span className="member__position">CTO</span>
            </div>

            <div className="member__item-leader grid">
              <img src="member-3.jpeg" alt="member-3.jpeg" />
              <h2 className="member__name">Pedro Martinez</h2>
              <span className="member__position">CFO</span>
            </div>
          </article>

          <h2 className="member__title">Sublideres</h2>
          <article className="member__members grid">
            <div className="member__item-member grid">
              <img src="member-4.jpeg" alt="member-4.jpeg" />
              <h2 className="member__name">Maria Rodriguez</h2>
              <span className="member__position">Diseñadora</span>
            </div>

            <div className="member__item-member grid">
              <img src="member-5.png" alt="member-5.png" />
              <h2 className="member__name">Ana Jimenez</h2>
              <span className="member__position">Desarrolladora</span>
            </div>

            <div className="member__item-member grid">
              <img src="member-6.jpeg" alt="member-6.jpeg" />
              <h2 className="member__name">Jose Perez</h2>
              <span className="member__position">Desarrollador</span>
            </div>

            <div className="member__item-member grid">
              <img src="member-7.png" alt="member-7.png" />
              <h2 className="member__name">Carlos Martinez</h2>
              <span className="member__position">Diseñador</span>
            </div>

            <div className="member__item-member grid">
              <img src="member-8.png" alt="member-8.png" />
              <h2 className="member__name">Carlos Martinez</h2>
              <span className="member__position">Diseñador</span>
            </div>

            <div className="member__item-member grid">
              <div className="member__more">
                <p>30+</p>
              </div>
              <a className="member__more-link">y mas...</a>
              <span className="member__position">Lorem Ipsum</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
