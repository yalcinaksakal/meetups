//our-domain/favs
import Head from "next/head";
import { useSelector } from "react-redux";
import MeetupList from "../../components/meetups/MeetupList";

const FavsPage = () => {
  const favs = useSelector(state => state.meetups).meetups.filter(
    meetup => meetup.isFav
  );

  return (
    <>
      <Head>
        <title>Meetups-Favs</title>
        <meta name="description" content={"Fav meetups"} />
      </Head>
      <MeetupList meetups={favs} />
    </>
  );
};
export default FavsPage;
