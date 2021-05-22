import Fav from "../ui/Fav";
import classes from "./MeetupDetail.module.css";

const MeetpDetail = props => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <Fav isFav={props.isFav} meetUpId={props._id} />
    </section>
  );
};
export default MeetpDetail;
