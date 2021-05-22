//our-domain/new-meetup

import { useRouter } from "next/router";
import { useState } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Spinner from "../../components/ui/Spinner";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { meetupsSliceActions } from "../../store/meetups-slice";
const NewMeetupPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState({ status: false, msg: "" });
  const dispatch = useDispatch();
  const addMeetupHandler = async meetupData => {
    setIsLoading({ status: true, msg: "Loading" });
    await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });
    setIsLoading({ status: false, msg: "Succesfully added" });
    dispatch(meetupsSliceActions.addMeetup(meetupData));
    setTimeout(() => {
      setIsLoading({ status: false, msg: "ok" });
      router.push("/");
    }, 1000);
  };
  return isLoading.msg ? (
    <>
      <p>{isLoading.msg}</p>
      {isLoading.status && <Spinner />}
    </>
  ) : (
    <>
      <Head>
        <title>Meetups-Add a new meetup</title>
        <meta name="description" content="Add a new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
