import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function MainNavigation() {
  const router = useRouter();
  const { numberOfFavs } = useSelector(state => state.meetups);
  const [isBump, setIsBump] = useState(false);

  useEffect(() => {
    if (!numberOfFavs) return;
    setIsBump(true);
    const bumpTimer = setTimeout(() => setIsBump(false), 300);
    return () => clearTimeout(bumpTimer);
  }, [numberOfFavs]);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li className={router.pathname === "/" ? classes.active : ""}>
            <Link href="/">Meetups</Link>
          </li>
          <li className={router.pathname === "/favs" ? classes.active : ""}>
            <Link href="/favs">Favs</Link>
            <div className={`${classes.batch} ${isBump ? classes.bump : ""}`}>
              {numberOfFavs}
            </div>
          </li>

          <li
            className={router.pathname === "/new-meetup" ? classes.active : ""}
          >
            <Link href="/new-meetup">Add Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
