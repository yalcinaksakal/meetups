//our-domain/

//next js will detect MongoClien will be used on server side and wont import it on client side. Smart feature
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
const HomePage = props => {
  return (
    <>
      <Head>
        <title>Meetups</title>

        <meta name="description" content="Browse a list of acitve meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

//getStaticProps works on only pages.
//dring building process on server side it is called and executed.
//never ends up in client side and execute there
export async function getStaticProps() {
  // fetch data
  //since this function is called on server side no need to fetch data. directly get them.
  const client = await MongoClient.connect(
    "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  // or read  data from db or file system

  //revalidate property:use it when data changes are frequent. waits 10 secs to regenerate, and return static page with new data
  console.log("static props");
  return {
    props: {
      meetups: meetups.map(meetup => {
        return { ...meetup, _id: meetup._id.toString() };
      }),
    },
    revalidate: 1,
  };
}

// 2nd way
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return { props: { meetups: DummyData } };
// }

export default HomePage;
