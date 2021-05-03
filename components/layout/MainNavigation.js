import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function MainNavigation() {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li className={router.pathname === "/" ? classes.active : ""}>
            <Link href="/">Meetups</Link>
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
