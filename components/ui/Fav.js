import { useDispatch } from "react-redux";
import favHandler from "../../helper/favHandler";
import { meetupsSliceActions } from "../../store/meetups-slice";

function Fav(props) {
  const dispatch = useDispatch();
  const toggleFavHandler = () => {
    dispatch(meetupsSliceActions.toogleFav(props.meetUpId));
    favHandler(props.meetUpId, !props.isFav);
  };

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
      onClick={toggleFavHandler}
    ></i>
  );
}

export default Fav;
