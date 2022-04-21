import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Router from "next/router";

export default function Home({ token }) {
  return (
    <Layout>
      <div className={styles.header}>
        {" "}
        <Navbar />
      </div>
      <Head>
        <title>First Page</title>
      </Head>
      <br></br> <br></br> <br></br> <br></br>
      <div className={styles.image}>
        <Image src="/Series4.jpg" alt="my picture" width={200} height={200} />
        <br></br>
        <p>Apple Watch Series 4</p>
        <h2>$320.88 </h2>
      </div>
      <div className={styles.h2}>
        {" "}
        <h2>Successful payment</h2>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
