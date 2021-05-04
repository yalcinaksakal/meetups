//our-domain/meetupId

import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = props => {
  return <MeetupDetail {...props.meetupData} />;
};

export async function getStaticPaths() {
  // fallback false: all supported paths are declared in return statement
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}
export async function getStaticProps(context) {
  const id = context.params.meetupId;
  //since this function is called on server side, log will be observed there too
  console.log(id);
  return {
    props: {
      meetupData: {
        id,
        title: "A first meetup",
        image:
          "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        address: "some adress 1, 12345 City",
        description: "Test meetup 1",
      },
    },
  };
}

export default MeetupDetails;
