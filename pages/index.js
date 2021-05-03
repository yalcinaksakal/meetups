//our-domain/

import MeetupList from "../components/meetups/MeetupList";

const DummyData = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    address: "some adress 1, 12345 City",
    description: "Test meetup 1",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    address: "some adress 2, 12345 City",
    description: "Test meetup 2",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DummyData} />;
};

export default HomePage;
