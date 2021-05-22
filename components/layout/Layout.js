import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { meetupsSliceActions } from "../../store/meetups-slice";

function Layout(props) {
  const { isLoaded } = useSelector(state => state.meetups);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      console.log("layout fetching");
      const fecthData = async () => {
        const response = await fetch("/api/new-meetup", {
          method: "POST",
          body: JSON.stringify({ type: "all" }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        dispatch(meetupsSliceActions.setMeetups(data.meetups));
      };
      fecthData();
    }
  }, [isLoaded, dispatch]);

  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
