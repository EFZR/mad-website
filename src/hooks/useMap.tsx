import { useRef, useEffect, RefObject } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css'
import 'leaflet-providers'

export default function useMap(): RefObject<HTMLDivElement> {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, { attributionControl: false }).setView([14.023464, -87.211014], 15);

      L.tileLayer.provider('CartoDB.Positron').addTo(mapInstanceRef.current);

      L.marker([14.023464, -87.211014]).addTo(mapInstanceRef.current)
        .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
        .openPopup();
    }
  }, []);

  return mapRef;
}
