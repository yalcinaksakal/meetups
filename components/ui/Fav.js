import favHandler from "../../helper/favHandler";

function Fav(props) {
  return (
    <i
      title={`${props.isFav ? "Remove from" : "Add to"} favs`}
      style={{
        color: "red",
        fontSize: "1.5rem",
        margin: "1rem",
        cursor: "pointer",
      }}
      className={`${props.isFav ? "fas" : "far"} fa-heart`}
      onClick={() => favHandler(props.meetUpId, !props.isFav)}
    ></i>
  );
}

export default Fav;
