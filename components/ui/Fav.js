import { useState } from "react";
import favHandler from "../../helper/favHandler";

function Fav(props) {
  const [isFav, setIsFAv] = useState(props.isFav);
  return (
    <i
      title={`${props.isFav ? "Remove from" : "Add to"} favs`}
      style={{
        color: "red",
        fontSize: "1.5rem",
        margin: "1rem",
        cursor: "pointer",
      }}
      className={`${isFav ? "fas" : "far"} fa-heart`}
      onClick={() => {
        favHandler(props.meetUpId, !isFav);
        setIsFAv(prevState => !prevState);
      }}
    ></i>
  );
}

export default Fav;
