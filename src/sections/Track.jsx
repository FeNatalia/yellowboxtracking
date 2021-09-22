// NPM Packages
import { useEffect, useState } from "react";
// Project files
import TrackPhoto from "../assets/pictures/track.jpg"
import PackageItem from "../components/PackageItem";
import PackageModal from "../components/PackageModal";

export default function Track({ setModal }){
  // Local State
  const [status, setStatus] = useState(0);
  const [parcels, setParcels] = useState([]);
  // Constants 
  const API_URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"; 
  // List of Package previews
  const PackagesList = parcels.map((item) => (
      <PackageItem key={item.id} item={item} onClick={()=> onPackage(item)}/>
  ))
  // Custom hook
  useEffect(()=> {
    fetch(API_URL)
    .then((response)=>response.json())
    .then(onFetchSuccess)
    .catch(onFetchFail); 
  }, [setParcels, setStatus]);
  // Methods
  function onFetchSuccess(json) {
    setParcels(json);
    setStatus(2);
  }
  function onFetchFail(error){
    console.error("There was an error", error);
    setStatus(1);
  }
  function onPackage(item) {
    setModal(<PackageModal item={item}/>);
  }
    return(
        <section id="track">
          <div className="track-photo">
            <img src={TrackPhoto} alt="an illustration of a hand holding a mobile phone"/>
          </div>
          <h1>Track my parcel</h1>
          {status === 0 && <p>Loading</p>}
          {status === 1 && <p>Error</p>}
          {status === 2 && PackagesList}
        </section>
    )
}