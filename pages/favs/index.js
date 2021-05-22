//our-domain/favs

import { useSelector } from "react-redux";
import MeetupList from "../../components/meetups/MeetupList";

const FavsPage = () => {
  const favs = useSelector(state => state.meetups).meetups.filter(
    meetup => meetup.isFav
  );

  return <MeetupList meetups={favs} />;
};
export default FavsPage;
