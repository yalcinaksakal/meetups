//our-domain/meetupId

import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const MeetupDetails = () => {
  const id = useRouter().query.meetupId;
  const { isLoaded } = useSelector(state => state.meetups);
  const meetup = useSelector(state => state.meetups).meetups.find(
    meetup => meetup._id === id
  );
  return (
    <>
      <Head>
        <title>{isLoaded ? meetup.title : "Meetup"} meetup</title>
        <meta
          name="description"
          content={isLoaded ? meetup.description : "A meetup"}
        />
      </Head>
      {isLoaded && <MeetupDetail {...meetup} />}
    </>
  );
};

export default MeetupDetails;
