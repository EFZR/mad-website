import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import useMap from "@hooks/useMap"
import "@styles/Events.css"
import { useRef } from "react";

export default function Events() {

  //#region States

  const mapRef = useMap();

  const carouselTrack = useRef<HTMLDivElement>(null)

  //#endregion

  //#region Functions

  function renderLocation() {
    const locationSlider: JSX.Element[] = []
    for (let i = 0; i < 10; i++) {
      const location: JSX.Element = (
        <li className="carousel__slide" key={i}>
          <h3>Casa de john</h3>
          <span>Residencial las uvas</span>
          <button>mas..</button>
        </li>
      )

      locationSlider.push(location)
    }
    return locationSlider
  }

  function prevSlide() {
    if (carouselTrack.current) {
      const scrollAmount = carouselTrack.current.clientWidth * -1
      carouselTrack.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  function nextSlide() {
    if (carouselTrack.current) {
      const scrollAmount = carouselTrack.current.clientWidth * 1
      carouselTrack.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  //#endregion

  return (
    <section className="section container" id="events">
      <h1 className="section__title">Eventos</h1>

      <div className="events__container grid">
        <div className="carousel">
          <button className="prev__button" onClick={prevSlide}>
            <BiChevronLeft />
          </button>
          <div
            className="carousel__track-container"
            ref={carouselTrack}
            onScroll={(e) => e.preventDefault()}
          >
            <ul className="carousel__track">
              {renderLocation()}
            </ul>
          </div>
          <button className="next__button" onClick={nextSlide}>
            <BiChevronRight />
          </button>
        </div>
        <div className="map" ref={mapRef}></div>
      </div>

    </section>
  )
}
