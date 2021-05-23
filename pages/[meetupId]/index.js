//our-domain/meetupId

import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Spinner from "../../components/ui/Spinner";
const MeetupDetails = () => {
  const id = useRouter().query.meetupId;

  const { isLoaded } = useSelector(state => state.meetups);
  const meetup = useSelector(state => state.meetups).meetups.find(
    meetup => meetup._id === id
  );

  return (
    <>
      <Head>
        <title>{isLoaded ? meetup?.title : "Meetup"} meetup</title>
        <meta
          name="description"
          content={isLoaded ? meetup?.description : "A meetup"}
        />
      </Head>
      {isLoaded ? (
        !meetup ? (
          <ErrorPage statusCode="404" />
        ) : (
          <MeetupDetail {...meetup} />
        )
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default MeetupDetails;
