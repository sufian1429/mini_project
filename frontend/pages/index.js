import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <body>
      <div className={styles.header}>
        <Navbar />
      </div>
      <div className={styles.h1}>
        <h1>Apple Watch Shop</h1>
      </div>
      <div className={styles.row}>
        <div></div>
        <div className={styles.column1}>
          {/* <h2> Column1</h2> */}
          <div className={styles.box}>
            <Image
              
              src="/Series7.jpg"
              alt="my picture"
              width={200}
              height={200}
            />
            <div className={styles.p}>
              <a href="/Series7" className={styles.card}>
                <p> Apple Watch Series 7 </p>
              </a>
              <h2>$1,269.15</h2>
            </div>
          </div>
          <br></br>
          {/* <div className={styles.column1}> */}
            {/* <h2> Column1</h2> */}
            <div className={styles.box}>
              <Image
                
                src="/Series6.jpg"
                alt="my picture"
                width={200}
                height={200}
              />
              <div className={styles.p}>
                <a href="/Series6" className={styles.card}>
                  <p> Apple Watch Series 6 </p>
                </a>
                <h2>$818.23</h2>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className={styles.column2}>
          {/* <h2> Column2</h2> */}
          <div className={styles.box}>
            <Image
              
              src="/Series5.jpg"
              alt="my picture"
              width={200}
              height={200}
            />
            <div className={styles.p}>
              <a href="/Series5" className={styles.card}>
                <p> Apple Watch Series 5 </p>
              </a>
              <h2>$624.44</h2>
            </div>
          </div>
          <br></br>
          {/* <div className={styles.column2}> */}
            {/* <h2> Column2</h2> */}
            <div className={styles.box}>
              <Image
                
                src="/Series4.jpg"
                alt="my picture"
                width={200}
                height={200}
              />
              <div className={styles.p}>
                <a href="/Series4" className={styles.card}>
                  <p> Apple Watch Series 4 </p>
                </a>
                <h2>$320.88</h2>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className={styles.column3}>
          {/* <h2> Column3</h2> */}
          <div className={styles.box}>
            <Image
              
              src="/Series3.jpg"
              alt="my picture"
              width={200}
              height={200}
            />
            <div className={styles.p}>
              <a href="/Series3" className={styles.card}>
                <p> Apple Watch Series 3 </p>
              </a>
              <h2>$206.15</h2>{" "}
            </div>
          </div>
          <br></br>
          {/* <div className={styles.column3}> */}
            {/* <h2> Column3</h2> */}
            <div className={styles.box}>
              <Image
                
                src="/Series2.jpg"
                alt="my picture"
                width={200}
                height={200}
              />
              <div className={styles.p}>
                <a href="/Series2" className={styles.card}>
                  <p> Apple Watch Series 2 </p>
                </a>
                <h2>$164.33</h2>{" "}
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>

      {/* <div className={styles.footer}>
        <footer>footer</footer>
      </div> */}
    </body>
  );
}
