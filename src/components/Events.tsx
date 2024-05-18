import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import useMap from "@hooks/useMap"
import { useRef } from "react";
import "@styles/Events.css"

export default function Events() {

  //#region States

  const mapRef = useMap();

  const locationList = useRef<HTMLDivElement>(null)

  //#endregion

  //#region Functions

  function renderLocation() {
    const locationSlider: JSX.Element[] = []
    for (let i = 0; i < 10; i++) {
      const location: JSX.Element = (
        <div className="location__item grid" key={i}>
          <p>
            <span className="location__item-title">Casa de Nancy</span><br />
            Residencial las uvas
          </p>
        </div>
      )

      locationSlider.push(location)
    }
    return locationSlider
  }

  function prevSlide() {
    if (locationList.current) {
      const rect = locationList.current.getBoundingClientRect()
      const scrollAmount = rect.width * -1
      locationList.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  function nextSlide() {
    if (locationList.current) {
      const rect = locationList.current.getBoundingClientRect()
      const scrollAmount = rect.width * 1
      locationList.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  //#endregion

  return (
    <section className="section container events" id="events">
      <h1 className="section__title">Eventos</h1>
      <div className="event__article-container grid">
        <div className="map__container grid">
          <div className="slider__wrapper-map">
            <button
              type="button"
              id="prev__slide"
              className="slide__button"
              onClick={prevSlide}
            >
              <BiChevronLeft />
            </button>
            <div className="location__list" ref={locationList}>
              {renderLocation()}
            </div>
            <button
              type="button"
              id="next__slide"
              className="slide__button"
              onClick={nextSlide}
            >
              <BiChevronRight />
            </button>
          </div>
          <div className="map" ref={mapRef}></div>
        </div>
      </div>
    </section>
  )
}
