// NPM Packages
import { useState } from "react";

// Project files
import Modal from "./components/Modal";
import Home from "./sections/Home";
import Track from "./sections/Track";

export default function App() {
  // Local state
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <Home/>
      <Track setModal={setModal}/>
      <Modal state={[modal, setModal]}/>
    </div>
  );
}
