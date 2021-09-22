export default function PackageModal({ item }) {
    const {sender, eta, location_name} = item;
    return(
        <div>
            <h3>PACKAGE DETAILS</h3>
            <p>from: {sender}</p>
            <p>estimated time of arrival: {eta}</p>
            <p>pick up from: {location_name}</p>
        </div>
    )
}