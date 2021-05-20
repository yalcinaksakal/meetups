//our-domain/favs

import { MongoClient } from "mongodb";
import MeetupList from "../../components/meetups/MeetupList";

const FavsPage = props => {
  return <MeetupList meetups={props.favMeetups} />;
};

export async function getStaticProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  //return just _id
  const favMeetups = await await meetupsCollection
    .find({ isFav: true })
    .toArray();

  //dont forget to close connection
  client.close();

  return {
    props: {
      favMeetups: favMeetups.map(fav => ({ ...fav, _id: fav._id.toString() })),
    },
  };
}

export default FavsPage;
