

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";


export default function ASK() {
  return (
    <div className={styles.container}>
  <Navbar />
  
  <section className={styles.chat}>
      <div>
      <h1 className={styles.title2}>Let's Chat.</h1>
      <input className={styles.textinput } type="text" value="YOUR PHONE NUMBER HERE"/><button className={styles.button}>&rarr;</button>
    </div>

    </section>
    <section className={styles.grid}>
          <h2 className={styles.heading}>What you can get with AskFree:</h2>
          <div className={styles.horizontalgrid}>
            <div className={styles.card}>
              <img
              src="/Ellipse.png"
              style={{ margin: "20px", width: "135px" }}
              />
              <p style={{fontWeight: '600' }}>Title Placeholder</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className={styles.card}>
              <img
              src="/Ellipse.png"
              style={{ margin: "20px", width: "135px" }}
              />
              <p style={{fontWeight: '600' }}>Title Placeholder</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className={styles.card}>
              <img
              src="/Ellipse.png"
              style={{ margin: "20px", width: "135px" }}
              />
              <p style={{fontWeight: '600' }}>Title Placeholder</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className={styles.card}>
              <img
              src="/Ellipse.png"
              style={{ margin: "20px", width: "135px" }}
              />
              <p style={{fontWeight: '600' }}>Title Placeholder</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </section>
        <div style={{marginBottom: "5rem"}}><h2 className={styles.heading} style={{fontSize: "3rem"}}>Looking for more? Try <b><u>Ask+</u></b></h2></div>
    <Footer />


    </div>

  )
  }