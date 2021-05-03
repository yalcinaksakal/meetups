import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link activeClassName={classes.acitve} href="/">
              Meetups
            </Link>
          </li>
          <li>
            <Link activeClassName={classes.acitve} href="/new-meetup">
              Add Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
