import useMap from '@hooks/useMap'

import "@styles/Events.css"

export default function Events() {
  const mapRef = useMap()

  return (
    <section className="section container" id="events">
      <h1 className="section__title">Eventos</h1>
      <div id='map' ref={mapRef}></div>
    </section>
  )
}
