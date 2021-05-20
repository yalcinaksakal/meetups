import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import Fav from "../ui/Fav";

function MeetupItem(props) {
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Details</button>
        </div>
        <Fav
          isFav={props.isFav}
          meetUpId={props.id}
          favPageHandler={props.favPageHandler}
        />
      </Card>
    </li>
  );
}

export default MeetupItem;
