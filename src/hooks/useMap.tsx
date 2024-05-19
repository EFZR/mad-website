import { useRef, useEffect, RefObject } from "react";
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/leaflet.css'
import 'leaflet-providers'

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconRetinaUrl: iconRetina,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
})

export default function useMap(): RefObject<HTMLDivElement> {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, { attributionControl: false }).setView([14.023464, -87.211014], 13);

      L.tileLayer.provider('OpenStreetMap.France').addTo(mapInstanceRef.current);

      L.Marker.prototype.options.icon = DefaultIcon;
      L.marker([14.023464, -87.211014]).addTo(mapInstanceRef.current)
        .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
        .openPopup();
    }
  }, []);

  return mapRef;
}
