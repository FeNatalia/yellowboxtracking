// NPM packages
import { MapContainer, TileLayer, Marker } from "react-leaflet";
// Project files
import PackageLogo from "../assets/pictures/package.png";
import DateTime from "./DateTime.jsx";
import StatusConverter from "./StatusConverter";

export default function PackageModal({ item }) {
  const {
    sender,
    eta,
    location_name,
    parcel_id,
    status,
    location_coordinate_latitude,
    location_coordinate_longitude,
  } = item;
  return (
    <div id="modal-popup">
      <div className="upper-part">
        <h3>Parcel information</h3>
        <div className="package-logo">
          <img src={PackageLogo} alt="a brown box in a circle" />
        </div>
      </div>
      <p>From: {sender}</p>
      <p>Parcel ID: {parcel_id}</p>
      <DateTime dateTimeString={eta} />
      <div id="status">
        <p>Status:</p>
        <StatusConverter orderStatus={status} />
      </div>
      <p>Pickup location: {location_name}</p>
      <MapContainer
        center={[location_coordinate_latitude, location_coordinate_longitude]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            location_coordinate_latitude,
            location_coordinate_longitude,
          ]}
        ></Marker>
      </MapContainer>
    </div>
  );
}
