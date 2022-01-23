import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>McAsks</title>
        <meta name="description" content="Generated by create next app" />
        <script
          src="https://kit.fontawesome.com/3c7024af34.js"
          crossorigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.triangleTopLeft}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 className={styles.title}>You ask,</h1>
            <h1 className={styles.title2}>We answer</h1>
            <br></br>
            <Link href="/askfree">
              <button className={styles.button}>TRY FOR FREE &rarr;</button>
            </Link>
          </div>
          <div>
            <img
              src="/phone.png"
              alt="phone mockup"
              style={{ marginTop: "1rem", width: "400px" }}
            />
          </div>
        </section>

        <section className={styles.grid}>
          <h2 className={styles.heading}>What you can ask:</h2>
          <h4 className={styles.subheading}>(We'll never leave you on read)</h4>
          <div className={styles.horizontalgrid}>
            <div className={styles.card}>
              <img
                src="/Ellipse.png"
                style={{ margin: "20px", width: "135px" }}
              />
              <p style={{ fontWeight: "600" }}>Title Placeholder</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className={styles.card}>
              <img
                src="/Ellipse.png"
                style={{ margin: "20px", width: "135px" }}
              />
              <p style={{ fontWeight: "600" }}>Title Placeholder</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className={styles.card}>
              <img
                src="/Ellipse.png"
                style={{ margin: "20px", width: "135px" }}
              />
              <p style={{ fontWeight: "600" }}>Title Placeholder</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.grid}
          style={{ padding: "8rem 0rem 8rem 0rem", background: "#E6FAF2" }}
        >
          <h2 className={styles.heading}>Answers you can trust.</h2>

          <div className={styles.gridlayout}>
            <p style={{ fontSize: "1.2rem" }}>
              Find in-depth information about Next.js features and API.
            </p>
            <hr />
            <div
              style={{
                width: "191.68px",
                height: "143.02px",
                background: "#93B8A4",
                borderRadius: "10px",
              }}
            ></div>
          </div>

          <div
            className={styles.gridlayout}
            style={{ top: "-3rem", left: "-10rem" }}
          >
            <p style={{ fontSize: "1.2rem" }}>
              Find in-depth information about Next.js features and API.
            </p>
            <hr />
            <div
              style={{
                width: "191.68px",
                height: "143.02px",
                background: "#C4C4C4",
                borderRadius: "10px",
              }}
            ></div>
          </div>

          <div className={styles.gridlayout} style={{ top: "-6rem" }}>
            <p style={{ fontSize: "1.2rem" }}>
              Find in-depth information about Next.js features and API.
            </p>
            <hr />
            <div
              style={{
                width: "191.68px",
                height: "143.02px",
                background: "#93B8A4",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
