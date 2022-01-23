/*  ./components/Navbar.jsx     */
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img
          src="/mcasks.png"
          alt="logo"
          style={{ marginTop: "1rem", height: "214px" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p>
          <b>Information</b>
        </p>
        <p>Main</p>
        <p>How It Works</p>
        <p>Sign UP</p>
        <p>Contacts</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p>
          <b>Contacts</b>
        </p>
        <span style={{ display: "flex", gap: "10px" }}>
          <FontAwesomeIcon
            style={{ fontSize: "25px", color: "#FFF" }}
            icon={faMapMarker}
          ></FontAwesomeIcon>
          <p>1111 Bikini Bottom Sample City, Sample Country MCH 4CKS</p>
        </span>
        <span style={{ display: "flex", gap: "10px" }}>
          <FontAwesomeIcon
            style={{ fontSize: "25px", color: "#FFF" }}
            icon={faPhone}
          />
          <p>1333-555-7777</p>
        </span>
        <span style={{ display: "flex", gap: "10px" }}>
          <FontAwesomeIcon
            style={{ fontSize: "25px", color: "#FFF" }}
            icon={faEnvelope}
          />
          <p>info@McAsks.ca</p>
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p>
          <b>Social Media</b>
        </p>
        <FontAwesomeIcon
          style={{ fontSize: "25px", color: "#FFF" }}
          icon={faFacebook}
        />
        <FontAwesomeIcon
          style={{ fontSize: "25px", color: "#FFF" }}
          icon={faTwitter}
        />
        <FontAwesomeIcon
          style={{ fontSize: "25px", color: "#FFF" }}
          icon={faLinkedin}
        />
        <FontAwesomeIcon
          style={{ fontSize: "25px", color: "#FFF" }}
          icon={faPinterest}
        />
      </div>
    </footer>
  );
};
