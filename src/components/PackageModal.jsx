// Project files
import PackageLogo from "../assets/pictures/package.png"

export default function PackageModal({ item }) {
    const {sender, eta, location_name, parcel_id, status} = item;
    return(
        <div id="modal-popup">
            <div className="upper-part">
                <h3>Parcel information</h3>
                <div className="package-logo">
                    <img src={PackageLogo} alt="an illustration of a brown box in a yellow circle"/>
                </div>
            </div>
            <p>From: {sender}</p>
            <p>Parcel ID: {parcel_id}</p>
            <p>Estimated arrival: {eta}</p>
            <p>Order status: {status}</p>
            <p>Pickup location: {location_name}</p>
        </div>
    )
}