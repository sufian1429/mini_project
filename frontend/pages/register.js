import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import axios from "axios";
import config from "../config/config";
import Router from "next/router";

export default function Register({ token }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const profileUser = async () => {
    console.log("token: ", token);
    const users = await axios.get(`${config.URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("user: ", users.data);
  };

  const register = async (req, res) => {
    try {
      let result = await axios.post(`${config.URL}/register`, {
        name,
        surname,
        username,
        email,
        password,
      });
      console.log("result: ", result);
      console.log("result.data:  ", result.data);
      console.log("token:  ", token);
      setStatus(result.data.message);
    } catch (e) {
      console.log(e);
    }
  };

  const registerForm = () => (
    <div className={styles.gridContainer}>
      <div className={styles.form}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Firstname"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            name="surname"
            placeholder="Lastname"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
  const loginpage = () =>
    Router.push({
      pathname: "/login",
    });

  return (
    <Layout> 
      <div className={styles.header}>
      <Navbar />
      </div>
      <Head>
       
        <title>Register</title>
      </Head>
      <div className={styles.container}>
       
        <br></br>
        <br></br>
        <div className={styles.regis}>
          <h3>Create Account</h3>
          <p>Status: {status}</p>
          <div className={styles.content}>{registerForm()}</div>
          <br></br>
          <div>
            <button className={styles.buttonregisup} onClick={register}>
              sign up
            </button>
            <button className={styles.buttonregis} onClick={() => loginpage()}>
              sign in
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
