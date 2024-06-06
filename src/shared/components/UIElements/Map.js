import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <MapContainer
        className={`map ${props.className}`}
        center={props.center}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={props.center}>
          <Popup>
            {props.title}. <br /> {props.address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
