//our-domain/meetupId
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
  const meetupDetail = {
    id: "m1",
    title: "A first meetup",
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    address: "some adress 1, 12345 City",
    description: "Test meetup 1",
  };
  return <MeetupDetail {...meetupDetail} />;
};

export default MeetupDetails;
