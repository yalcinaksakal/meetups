import { useSelector } from "react-redux";
import Spinner from "../ui/Spinner";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  const { isLoaded } = useSelector(state => state.meetups);
  return (
    <ul className={classes.list}>
      {props.meetups.length ? (
        props.meetups.map(meetup => (
          <MeetupItem
            key={meetup._id}
            id={meetup._id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            isFav={meetup.isFav}
          />
        ))
      ) : isLoaded ? (
        <p>No meetups added yet.</p>
      ) : (
        <Spinner />
      )}
    </ul>
  );
}

export default MeetupList;
