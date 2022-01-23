/*  ./components/Navbar.jsx     */
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span>
          <img
            src="/mcasks.png"
            alt="logo"
            style={{ marginTop: "1rem", height: "214px" }}
          />
        </span>
      </Link>
      <div style={{display: "flex", gap: "1.5rem"}}>
        <Link href="/">
          <a className={styles.navlink}> HOME </a>
        </Link>
        <Link href="/askfree">
          <a className={styles.navlink}> ASKFREE </a>
        </Link>
        {/* <Link href='/askplus'>
          <span><a className={styles.navlink}> ASK + </a></span>
        </Link>
        <Link href='/contact'>
          <span><a className={styles.navlink}> CONTACT </a></span>
        </Link> */}
      </div>
    </nav>
  );
};
