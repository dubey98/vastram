import { useState } from "react";
import { useHistory } from "react-router-dom";

function ImageTile({ data }) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const history = useHistory();

  function mouseEventHandler() {
    if (mouseEnter) {
      return (
        <div
          className="content hero-body "
          style={{
            backgroundColor: "black",
            opacity: "0.7",
          }}
        >
          <div className="has-text-white has-text-centered is-size-2">
            {data.text}
          </div>
        </div>
      );
    }
  }

  return (
    <div
      className="tile is-child bg-img hero"
      style={{ backgroundImage: `url(${data.src})` }}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      onClick={() => history.push(data.linksTo)}
    >
      {mouseEventHandler()}
    </div>
  );
}

export default ImageTile;
