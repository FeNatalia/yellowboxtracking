// NPM Packages
import ReactDom from "react-dom";

export default function Modal({ state }) {
  const [child, setChild] = state;

  if (child === null) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-modal">
        <div className="modal">
          <div className="corner-button">
            <button onClick={() => setChild(null)}>X</button>
          </div>
          {child}
          <div className="bottom-button">
            <button onClick={() => setChild(null)}>Go back</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal-root")
  );
}
