

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";
import { Form } from "../components/Form";


export default function ASK() {
  return (
    <div className={styles.container}>
  <Navbar />
  
  <section className={styles.chat}>
      <div>
      <h1 className={styles.title2}>Let's Chat.</h1>
      <Form />
      {/* <input className={styles.textinput } type="text" autoComplete="YOUR PHONE NUMBER HERE"/><button className={styles.button}>&rarr;</button> */}
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
              <p style={{fontWeight: '600' }}>Search</p>
              <p>                Wanted to know what a term means but don't have internet? Fret not!
</p>
            </div>

            <div className={styles.card}>
              <img
              src="/Ellipse.png"
              style={{ margin: "20px", width: "135px" }}
              />
              <p style={{fontWeight: '600' }}>Location/Directions</p>
              <p>Never get lost again with on-deman location and directions.</p>
            </div>

            <div className={styles.card}>
              <img
              src="/Ellipse.png"
              style={{ margin: "20px", width: "135px" }}
              />
              <p style={{fontWeight: '600' }}>Jokes</p>
              <p>McAsks is always there for you to brighten up your day!</p>
            </div>
            <div className={styles.card}>
              <img
              src="/Ellipse.png"
              style={{ margin: "20px", width: "135px" }}
              />
              <p style={{fontWeight: '600' }}>Quotes</p>
              <p>Need some motivation at 8am? We've got your back.</p>
            </div>
          </div>
        </section>
        <div style={{marginBottom: "5rem"}}><h2 className={styles.heading} style={{fontSize: "3rem"}}>Looking for more? Try <b><u>Ask+</u></b></h2></div>
    <Footer />


    </div>

  )
  }