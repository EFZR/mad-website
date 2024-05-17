import { BiChevronLeft, BiChevronRight } from "react-icons/bi"


export default function Carousel() {
  return (
    <div className="carousel">
      <button className="prev__button">
        <BiChevronLeft />
      </button>
      <div className="carousel__track-container">
        <ul className="carousel__track">
          <li className="carousel__slide">
            <h3>Casa de john</h3>
            <span>Residencial las uvas</span>
            <button>mas..</button>
          </li>
          <li className="carousel__slide">
            <h3>Casa de petra</h3>
            <span>Residencial lomas de germania</span>
            <button>mas..</button>
          </li>
          <li className="carousel__slide">
            <h3>Casa de carlos</h3>
            <span>Lomas del guijarro</span>
            <button>mas..</button>
          </li>
        </ul>
      </div>
      <button className="next__button">
        <BiChevronRight />
      </button>
    </div>
  )
}
