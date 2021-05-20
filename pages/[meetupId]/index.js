//our-domain/meetupId

import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
const MeetupDetails = props => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title} meetup</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail {...props.meetupData} />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  //return just _id
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  //dont forget to close connection
  client.close();
  // fallback false: all supported paths are declared in return statement
  // true:returns empty page immediately and once prerendering is done returns fullfilled page
  //blocking:user will see nothing until page is regenerated
  return {
    fallback: "blocking",
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() },
    })),
    // paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}
export async function getStaticProps(context) {
  const { meetupId } = context.params;
  //since this function is called on server side, log will be observed there too

  const client = await MongoClient.connect(
    "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  //return just _id
  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  //dont forget to close connection
  client.close();

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        isFav: meetup.isFav,
      },
    },
  };
}

export default MeetupDetails;
