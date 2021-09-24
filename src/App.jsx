// NPM Packages
import { useState } from "react";
import "./styles/style.css";

// Project files
import Modal from "./components/Modal";
import Home from "./sections/Home";
import Track from "./sections/Track";
import Navigation from "./components/Navigation";

export default function App() {
  // Local state
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <Navigation />
      <Home />
      <Track setModal={setModal} />
      <Modal state={[modal, setModal]} />
    </div>
  );
}
