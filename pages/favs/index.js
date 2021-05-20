//our-domain/favs

import { MongoClient } from "mongodb";
import { useState } from "react";
import MeetupList from "../../components/meetups/MeetupList";

const FavsPage = props => {
  const [favs, setFavs] = useState(props.favMeetups);
  const removeFromList = id => {
    setFavs(prevFavs => prevFavs.filter(fav => fav._id !== id));
  };
  return <MeetupList meetups={favs} favPageHandler={removeFromList} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  //return just _id
  const favMeetups = await meetupsCollection.find({ isFav: true }).toArray();

  //dont forget to close connection
  client.close();

  return {
    props: {
      favMeetups: favMeetups.map(fav => ({ ...fav, _id: fav._id.toString() })),
    },
    revalidate: 1,
  };
}

export default FavsPage;
