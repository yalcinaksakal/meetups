import { useState } from "react";
import favHandler from "../../helper/favHandler";

function Fav(props) {
  const [isFav, setIsFav] = useState(props.isFav);
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
        setIsFav(prevState => !prevState);
        if (props.favPageHandler) props.favPageHandler(props.meetUpId);
      }}
    ></i>
  );
}

export default Fav;
