import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { meetups } = useSelector(state => state.meetups);

  return (
    <>
      <Head>
        <title>Meetups</title>

        <meta name="description" content="Browse a list of acitve meetups" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export default HomePage;
